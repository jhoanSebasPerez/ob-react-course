import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import {
  fetchRandonJoke,
  fetchCategories,
  fetchJokeWithCategory,
} from "../../services/fetchData.service";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import "../../styles/chuck-jokes.css";
import Button from "@mui/material/Button";

const ChuckJokes = () => {
  const [joke, setJoke] = useState("");
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");

  useEffect(() => {
    getRandomJoke();
    getCategories();
  }, []);

  const getRandomJoke = async () => {
    let newJoke;
    if (category.trim().length === 0) {
      newJoke = await fetchRandonJoke();
      console.log("inside log category");
    } else {
      newJoke = await fetchJokeWithCategory(category);
    }
    setJoke(newJoke);
  };

  const getCategories = async () => {
    const categoriesFromFetch = await fetchCategories();
    setCategories(categoriesFromFetch);
  };

  return (
    <Container>
      <Typography variant="h1">Chuck jokes</Typography>
      <Typography variant="h3" mt={3}>
        {joke}
      </Typography>

      <Box mt={5}>
        <Box onClick={() => setLikes(likes + 1)} className="btn-like-dislike">
          <p>
            <ThumbUpIcon className="like" />
            <span>{likes}</span>
          </p>
        </Box>
        <Box
          onClick={() => setDislikes(dislikes + 1)}
          className="btn-like-dislike"
        >
          <p>
            <ThumbDownIcon className="dislike" />
            <span>{dislikes}</span>
          </p>
        </Box>
      </Box>

      {/*List to select specific category */}
      <Box sx={{ maxWidth: 180, marginTop: 2 }}>
        <FormControl fullWidth>
          <InputLabel id="select-category">Category</InputLabel>
          <Select
            id="demo-simple-select"
            value={category}
            label="category"
            labelId="select-category"
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories.length > 0 &&
              categories.map((category, index) => (
                <MenuItem key={index} value={category}>
                  {category}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
      </Box>

      <Button
        onClick={getRandomJoke}
        style={{ marginTop: "20px" }}
        variant="contained"
      >
        Generate new joke
      </Button>
    </Container>
  );
};

export default ChuckJokes;
