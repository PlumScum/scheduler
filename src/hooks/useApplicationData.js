import React from "react";
import "components/Application.scss";
import { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData(props) {

    const [state, setState] = useState({
      day: "Monday",
      days: [],
      appointments:{},
      interviewers:{}
    })
  
    const setDay = day => setState({ ...state, day });
};