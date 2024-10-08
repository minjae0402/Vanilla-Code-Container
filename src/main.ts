import './style.css';
import { setupCounter } from './counter.ts';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>이은교 특검 2222222</h1></h1>
    <h1>강민재 행정실 쿠데타</h1></h1>
    <p>바보</p>
    <p>199석 강민재 특검하라</p>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!);
