class Calculator {
    val1
    val2
    result
    sval
    sout
    sresult
    sqval
    sqresult

    constructor(firstInput,secondInput,resultInput,calcButton,operatorSelect,maths,singinput,scal,singoutput,insq,btnsq,outsq) {
        this.number1Input = document.getElementById(firstInput); 
        this.number2Input = document.getElementById(secondInput);
        this.resultInput = document.getElementById(resultInput);
        this.calcButton = document.getElementById(calcButton);
        this.operatorSelect = document.getElementById(operatorSelect);
        this.smath = document.getElementById(maths);
        this.singinput = document.getElementById(singinput);
        this.scal = document.getElementById(scal);
        this.singoutput = document.getElementById(singoutput);
        this.insq = document.getElementById(insq);
        this.btnsq = document.getElementById(btnsq);
        this.outsq = document.getElementById(outsq);

        const _t = this;
        this.calcButton.onclick = function () {
            _t.val1 = parseInt(_t.number1Input.value);
            _t.val2 = parseInt(_t.number2Input.value);

            let operator = _t.operatorSelect.value;

            if (operator == "+") {
                _t.addition();
            } else if (operator == "-") {
                _t.subtraction();
            } else if (operator == "*") {
                _t.multiplication();
            } else if (operator == "/") {
                _t.divition();
            }

            _t.output();
            
        };
        this.scal.onclick = function (){
            _t.sval = parseInt(_t.singinput.value);

            let soperator = _t.smath.value;
            if (soperator == "tan"){
                _t.tan();
            } else if (soperator == "sin"){
                _t.sin();
            } else if (soperator == "cos"){
                _t.cos();
            }
            _t.soutput();

        }
        this.btnsq.onclick = function (){
            _t.sqval = parseInt(_t.insq.value);
            _t.sqre();
            _t.sqoutt();
        }
    }


    addition() {
        this.result = this.val1 + this.val2
    }
    subtraction() {
        this.result = this.val1 - this.val2
    }
    multiplication() {
        this.result = this.val1 * this.val2
    }
    divition() {
        this.result = this.val1 / this.val2
    }


    output() {
        
        this.resultInput.value = this.result;  
    }

    tan(){
        this.sresult = Math.tan(this.sval)
    }
    sin(){
        this.sresult = Math.sin(this.sval)
    }
    cos(){
        this.sresult = Math.cos(this.sval)
    }

    soutput(){
        this.singoutput.value = this.sresult;
    }

    sqre(){
        this.sqout = Math.sqrt(this.sqval)
    }
    sqoutt(){
        this.outsq.value = this.sqout
    }
}


new Calculator('number1', 'number2', 'Endresult', 'calculate', 'operations','math','sinput','scal','soutput','insq','sqbtn','outsq');