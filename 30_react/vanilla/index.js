// const List = React.createElement('ul', {}, [
// 	React.createElement('li', {}, '1'),
// 	React.createElement('li', {}, '2'),
// 	React.createElement('li', {}, '3'),
// ])

const List = (props) => {
  const children = props.arrayElements.map((el) => {
    return React.createElement('li', {}, el);
  });

  return React.createElement('ul', {}, children /* array of li's */);
};

const props = {
  arrayElements: ['daiane', 'abdoul', 'daniel']
};

ReactDOM.render(List(props), document.getElementById('app'));
