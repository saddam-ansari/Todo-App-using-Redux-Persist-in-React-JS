const styles = {
  taskContainer: {
    display: "flex",
    justifyContent: "center",
  },
  taskWrapper: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: 12,
    width: "80%",
    textAlign: "center",
    alignSelf: "center",
    borderRadius: 4,
    boxShadow: "0 10px 15px 15px rgba(0,0,0,0.1)",
  },
  task: {
    textAlign: "right",
    textDecuration: "none",
    paddingLeft: 20,
    fontSize: 20,
  },
  iconWrapper: {
    marginTop: 22,
  },
  completedIcon: {
    fontSize: 20,
    color: "springgreen",
    cursor: 'pointer'
  },
  deletedIcon: {
    fontSize: 20,
    marginLeft: 20,
    marginRight: 20,
    color: 'red',
    cursor: 'pointer'
  },
};

export default styles;
