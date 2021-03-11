import React, { useState, useEffect } from "react";
import Question from "./Question.jsx";
import QuestionSearch from "./QuestionSearch.jsx";
import AddQuestion from "./AddQuestion.jsx";
import API from "../../../api";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "80vw",
  },
  questionsGridItem: {
    maxHeight: "50vh",
    overflow: "scroll",
  },
}));

const Questions = ({ product_id, product_name }) => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [questionsToShow, setQuestionsToShow] = useState(4);
  const [productName, setProductName] = useState("");
  const [expanded, setExpanded] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    loadData(product_id);
  }, []);

  var loadData = async (product_id) => {
    let options = {
      product_id: product_id,
      page: 1,
      count: 200,
    };

    API.getQuestions(options)
      .catch((err) => console.log("getQuestions", err))
      .then((response) =>
        setData(
          response.data.results.sort((a, b) =>
            a.helpfulness > b.helpfulness ? -1 : 1
          )
        )
      );

    API.getProduct(product_id)
      .then((res) => {
        setProductName(res.data.name);
      })
      .catch((err) => console.log("ERROR: ", err));
  };

  var handleSearch = (searchTerm) => {
    if (searchTerm.length > 2) {
      setSearchTerm(searchTerm);
    } else {
      setSearchTerm("");
    }
    return;
  };

  const showMore = () => {
    expanded ? setQuestionsToShow(4) : setQuestionsToShow(data.length);
    setExpanded(!expanded);
  };

  handleSearch = handleSearch.bind(this);
  loadData = loadData.bind(this);

  return (
    <Box elevation={0} className={classes.root}>
      <Grid container direction="column" spacing={1}>
        <Grid item>
          <Typography
            variant="h5"
            style={{ paddingBottom: 0, paddingTop: 4, margin: 10 }}
          >
            QUESTIONS AND ANSWERS
          </Typography>
        </Grid>
        <Grid item>
          <QuestionSearch handleSearch={handleSearch} />
        </Grid>
        <Grid item className={classes.questionsGridItem}>
          <Grid
            container
            direction="column"
            spacing={3}
            style={{ maxWidth: "97%" }}
          >
            {data
              .filter((q) =>
                q.question_body.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .slice(0, questionsToShow)
              .map((q) => (
                <Grid key={q.question_id} item>
                  <Question
                    product_id={product_id}
                    question={q}
                    refresh={loadData}
                  />
                </Grid>
              ))}
          </Grid>
        </Grid>
      </Grid>
      <Grid container justify="center" alignItems="center" spacing={1}>
        {data.length > 2 ? (
          <Grid item>
            <Button
              color="primary"
              onClick={showMore}
              size="large"
              variant="outlined"
            >
              {expanded ? (
                <span>FEWER QUESTIONS</span>
              ) : (
                <span>MORE ANSWERED QUESTIONS</span>
              )}
            </Button>
          </Grid>
        ) : null}
        <Grid item>
          <AddQuestion
            product_id={product_id}
            product_name={productName}
            refresh={loadData}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Questions;
