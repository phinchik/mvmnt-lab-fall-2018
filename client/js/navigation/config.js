import React from "react";
import { Header } from "react-navigation";
import { colors } from "../config/styles";

export const sharedNavigationOptions = navigation => ({
  headerBackTitle: null,
  header: props => <Header {...props} />,

  headerStyle: {
    backgroundColor: colors.green
  }
});
