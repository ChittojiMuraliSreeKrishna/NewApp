import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { shallowEqual, useSelector } from "react-redux";

const Page1: React.FC = (props: any) => {
  const peoples: readonly IPeople[] = useSelector(
    (state: PeopleState) => state.peoples,
    shallowEqual
  );

  return (
    <View>
      <View style={styles.table}>
        <View style={styles.tableHead}>
          <Text>UserName</Text>
          <Text>Password</Text>
        </View>
        {peoples.map((people: IPeople, index) => (
          <View key={index} style={styles.tableBody}>
            <Text style={styles.tableText}>{people.username}</Text>
            <Text style={styles.tableText}>{people.password}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Page1;

const styles = StyleSheet.create({
  table: {
    width: "80%",
    marginHorizontal: "10%",
    borderColor: "black",
    borderWidth: 2,
    marginTop: "10%",
    padding: 10,
  },
  tableText: {
    fontSize: 16,
    fontWeight: "500",
  },
  tableHead: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
  tableBody: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
});
