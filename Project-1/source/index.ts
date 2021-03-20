class Project1 {
    input1Input: HTMLInputElement;
    input2Input: HTMLInputElement;
    input3Input: HTMLInputElement;
    input4Input: HTMLInputElement;

    sumInput: HTMLInputElement;
    avgInput: HTMLInputElement;
    minInput: HTMLInputElement;
    maxInput: HTMLInputElement;
    constructor() {
        this.startApp();
    }
    startApp(){
        this.getInputs();
        this.watchInputValues();
    }

    getInputs() {
        this.input1Input = document.querySelector('#input1');
        this.input2Input = document.querySelector('#input2');
        this.input3Input = document.querySelector('#input3');
        this.input4Input = document.querySelector('#input4');
        this.sumInput = document.querySelector('#sum');
        this.avgInput = document.querySelector('#avg');
        this.minInput = document.querySelector('#min');
        this.maxInput = document.querySelector('#max');
    }

    watchInputValues() {
        this.input1Input.addEventListener('input', () => this.computeData());
        this.input2Input.addEventListener('input', () => this.computeData());
        this.input3Input.addEventListener('input', () => this.computeData());
        this.input4Input.addEventListener('input', () => this.computeData());
    }
    computeData(){
        const input1 = +this.input1Input.value;
        const input2 = +this.input2Input.value;
        const input3 = +this.input3Input.value;
        const input4 = +this.input4Input.value;
        const sum = input1 + input2 + input3 +input4;
        const avg = sum / 4;

        const min = Math.min(input1, input2, input3, input4)
        const max = Math.max(input1, input2, input3, input4)
        this.showStats(sum, avg, min, max);
    }
    showStats(sum: number, avg: number, min: number, max: number){
        this.sumInput.value = sum.toString();
        this.avgInput.value = avg.toString();
        this.minInput.value = min.toString();
        this.maxInput.value = max.toString();
    }
}

const project1 = new Project1();