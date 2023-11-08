import createStyledElement from './model/createElement-ESM.js';

// 예제: div 요소를 생성하고 스타일을 적용
const myDiv = createStyledElement('div', {
  backgroundColor: 'blue',
  color: 'white',
  fontSize: '16px'
});

// DOM에 생성된 요소를 추가
document.body.appendChild(myDiv);
