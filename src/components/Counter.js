import React from "react";
import { connect } from "react-redux";
import { increment, decrement } from "../actions";

const Counter = ({ count, increment, decrement }) => (
  <div style={styles.counterContainer}>
    <p style={styles.countText}>Count: {count}</p>
    <button style={styles.button} onClick={increment}>
      Increment
    </button>
    <button style={styles.button} onClick={decrement}>
      Decrement
    </button>
  </div>
);

const styles = {
  counterContainer: {
    textAlign: "center",
    margin: "20px",
  },
  countText: {
    fontSize: "18px",
    fontWeight: "bold",
  },
  button: {
    margin: "5px",
    padding: "8px 16px",
    fontSize: "14px",
    cursor: "pointer",
  },
};

const mapStateToProps = (state) => ({
  count: state.counter.count,
});

const mapDispatchToProps = {
  increment,
  decrement,
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
