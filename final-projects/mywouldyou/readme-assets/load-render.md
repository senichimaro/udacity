# Phase A: Step 2 - Download & render data

1. Create Container Components
2. Create Presentational Components
3. Create Presentational Elements
4. Create Style for Presentational Elements

## 1. Create Container Components

As seen in the Hierarchy graph, Container Components process data which will be rendered by Presentational Components as Cards.

In charge data manipulation, they are purely operational, providing to Presentational Components clean data to be placed into Presentational Elements as images or text.

### First Component: Show Questions

This Component is responsible to find the questions table and get all the questions entries, then it pass the questions data object to a child Presentational Component.

The presentation (rendering the option one text as description) consist of a loop which renders each question in a Card Component where data fields are placed.

This is the main entry point of the App because it serves the Questions, which is the whole point: Questions to be seen and answered. That is why this is the first Component to developed.

## Connect Component

Once the Store is mounted, connect a component simple: wrap the component into conect()(component).

It will be provided by default with dispatch.

### Values Needed

No value from the store is provided besides dispatch by default, to find and receive values from the store entries should be used MapStateToProps.

#### MapStateToProps

mapStateToProps is used for selecting the part of the data from the store that the connected component needs.

* It is called every time the store state changes.
* It receives the entire store state, and should return an object of data this component needs.

> The values updates the view in the render method of a class if they are directly passed in. Pipe them through componentDidMount as a class property to then passed in to the render method will not update the values into the view.

```
// # will update or intime
class ShowQuestionsContainer extends React.Component {
  render() { return JSON.stringify(this.props.questions) }
}
export default connect((state) => ({questions: state.questions}))(ShowQuestionsContainer)

// # will not update or behind
class ShowQuestionsContainer extends React.Component {
  componentDidMount() { this.questions = this.props.questions }
  render() { return JSON.stringify(this.questions) }
}
export default connect((state) => ({questions: state.questions}))(ShowQuestionsContainer)
```

### Second Component: Leader Board

The structure, at first glance, it's the same as first container: rendering users in place of questions. In this particular case, this component is a copy of the first which sustitutes questions by users.
