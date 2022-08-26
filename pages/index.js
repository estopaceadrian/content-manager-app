import React, { useEffect, useState } from 'react';

function CompA(props) {
  return (
    <div>
      <h1>CompA</h1>
      <p>Hello Comp A</p>
      <div>My Prop1: {props.myProp1}</div>
      <div>My Prop2: {props.myProp2}</div>
      <div>My Prop3: {props.myProp3}</div>
      <div>My Prop4: {<props.myProp4 />}</div>
    </div>
  );
}
function CompB() {
  return (
    <div>
      <h1>CompB</h1>
    </div>
  );
}

class CompC extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 10,
    };
  }
  changeState(incrementor) {
    this.setState({
      value: incrementor,
    });
  }
  render() {
    const { value } = this.state;
    const { myProp1 } = this.props;
    return (
      <div>
        <h1>CompC</h1>
        Current Value: <h1>{value}</h1>
        <button onClick={() => this.changeState(value + 1)}>+</button>
        <button onClick={() => this.changeState(value - 1)}>-</button>
        <h2>{myProp1}</h2>
      </div>
    );
  }
}

function Home() {
  const [value, setValue] = useState(10);
  const [otherValue, setOtherValue] = useState(100);

  useEffect(() => {
    console.log('useEffect called');
  }, []);

  return (
    <div>
      Current Value: <h1>{value}</h1>
      <button onClick={() => setValue(value + 1)}>+</button>
      <button onClick={() => setValue(value - 1)}>-</button>
      <hr />
      Other Value: <h1>{otherValue}</h1>
      <button onClick={() => setOtherValue(otherValue + 1)}>+</button>
      <button onClick={() => setOtherValue(otherValue - 1)}>-</button>
      {/* <CompA
        myProp1={value}
        myProp2="My Custom Value"
        myProp3={true}
        myProp4={() => <div>My new JSX</div>}
      /> */}
      <CompC myProp1={value} />
    </div>
  );
}

export default Home;
