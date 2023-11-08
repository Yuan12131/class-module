/**
 * @param {DOM element string} tagName
 * @param {object} styleObject
 * returns DOM element
 * 
 * ? Object.keys()는
 * ? 객체의 key값들을 배열로 반환
 * ? forEach()는
 * ? 배열의 각 요소에 대해 제공된 함수를 차례대로 한번씩 실행
 * 
 * * for()문을 '배열에서' 사용하게끔 추상화된 javascript 문법
 */

export default function (tagName,styleObject){
  // DOM API 태그요소를 아래의 element로 생성
  const element = document.createElement(tagName);
  // javascript에서 지원하는 key() 메서드를 활용해 간편하게 배열로 가공
  let styleObjectKeyArray = Object.keys(styleObject);
  // 배열에 있는 값을 반복문을 통해 활용 -> forEach()
  // 아래 forEach() 콜백함수 key는 배열의 원소가 됨
  // 이러한 key와 같은 매개변수를 '반복하는 동안' 사용하는 것으로 반복자(iterator)라고 함
  // => '인자를 전달한다'고 표현
styleObjectKeyArray.forEach((key) => {
  element.style[key] = styleObject[key];
});

return element;
}