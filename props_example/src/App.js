import React, { Component } from 'react';
import Child from './Child';
import Children from './Children';

class App extends Component {
  render() {
    return (
      <div>
        <Child name="cargo" description="카고정, 그는 아직 미생이다."></Child>
        <Child name="aladdin" description="램프의 요정 지니를 잃었다."></Child>
        <Child name="Gennie" description="지니는 아무생각이 없다. 아메바같은 존재이다."></Child>
        <Child description="이름은 나중에 지을께"></Child>
        <hr/>
        <Children>
          <div>hello</div>
          <div>안녕하세요</div>
          <div>모시모시</div>
          <div>니하오</div>
          <div>할로</div>
        </Children>
      </div>
    );
  }
}

export default App;
