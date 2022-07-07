# this

=> this바인딩 - 호출부와 연관 - 호출 스택 확인
~ 바인딩 = 연결

# this의 규칙

=> 단독 함수 실행(Standalone Function Invocation) = this기본 규칙
----> 엄격모드(Stric Mode) - 전역객체는 기본 바인딩 대상 제외
----> 비엄격모드(Non-Stric Mode) - 전역객체만 기본 바인딩 대상

=> 객체의 소유(Owning) / 포함(Containing)
----> 암시적 바인딩(Implicit Binding) : 함수 동작에 필요한 정보가 담긴 객체(Context Object)가 존재할때
      + 객체 프로퍼티가 반복적으로 호출(Chaining)된 형태에서는 최상위/최하위 정보만 연관
      + 바인딩 소실 : 엄격 모드 여부에 따라 전역객체 / undefined 중 한가지로 기본 바인딩
----> 명시적 바인딩(Explicit Binding) : this에 사용할 객체를 알리고 싶을 때 (직접 전달)
      + call(), apply(), bind() 와같은 메서드를 이용

  ex) function foo() {
      console.log(this.a);
    }

    var obj = {
      a:2
    }
    
    foo.call(obj) -> foo의 this는 obj임을 명시 

* .call()에서 객체가 아닌 문자열, 불리언, 숫자를 넣으면 new String(), new boolean(), new Number()로 래핑(Wrapping)됨 -> Boxing 이라고 함 
      + 하드 바인딩(Hard Binding) : this를 명시해도 소실되는 경우가 있기 때문에 명시적 바인딩의 변형된 형태

  ex) function foo(num) {
      console.log(this.a, num);
      return this.a + num;
      }
      // foo라는 함수는 console에 this.a와 num을 찍어주는 함수 return 값으로 this.a + num 한 값도 뱉어냄
      var obj = {
        a:2
      }
      // 변수 선언
      
      var bar = function() {
        return foo.apply(obj, arguments);
      }
      // bar라는 변수는 함수이고, 함수 foo에서 console.log(this.a, num) 을 console.log(obj.a, arguments)로 지정해 주고 foo의 리턴값인 this.a + num 을 obj.a + arguments로 해줌
      
      var b = bar(3);
      // 변수 b는 함수 bar의 arguments값에 3을 넣어준 상태이고 아직 더하지는 않았음
      console.log(b);
      // console에는 함수 bar에 3을 넣어준 상태에서 foo의 리턴값인 더하기를 해서 최종 값이 찍힘

  ex-2) function foo(num) {
      console.log(this.a, num);
      return this.a + num;
      } 

     function bind(fn, obj){
      return function(){
        return fn.apply(obj, arguments);
      }
    }
    // bind라는 함수는 fn, obj라는 매개변수를 가지고있고, reutrn을 함수로 하는데 그 함수의 return은 어떤 함수를 apply해줌 -> 재사용이 가능하도록 함수로 묶어줌

      var obj = {
        a:2
      }

    var bar = bind(foo, obj);
    var b = bar(3);
    console.log(b);

    -> 위와 같은 형식은 자주 쓰이기 때문에 bind()라는 내장함수로 되어있음
    따라서 위의 코드는

    function foo(num) {
      console.log(this.a, num);
      return this.a + num;
      } 

    var obj = {
      a:2
    }

    var bar = foo.bind(obj);
    var b = bar(3);
    console.log(b);
    로 쓸 수 있음

    * bind()는 this의 컨텐스트로 원본 함수를 호출하는 하드코딩된 함수를 반환하는 내장함수임

=> new binding
----> new - 생성자 호출(Constructor Call) 생성자 함수(Constructor Function)과는 차이가 있음
----> 함수 앞에 new를 붙여주면 -> 새로운 객체 생성 - 새로 생성된 객체의 [[Prototype]] 이 연결 - 새로 생성된 객체는 함수 호출 시 this로 바인딩됨 - 함수가 자신의 또다른 객체를 반환하지 않는 한 new와 함께 호출된 함수는 자동으로 생성된 객체를 반환

  ex) function foo(a){
      this.a = a;
    }
    // 함수foo는 a라는 매개변수를 가지며 this.a = a 를 실행하는 함수임
    
    var bar = new foo(2);
    // 변수 bar는 함수 foo의 매개변수에 2를 넣어준 새로운 함수가 됨
    // bar라는 함수는 this.a = 2 를 실행하는 함수가 됨 
    console.log(bar.a);

    -> new는 함수를 호출하면 this를 새로운 객체에 연결해 주는 방법임 (New Binding)

=> this의 우선순위
----> 명시적 바인딩 > 암시적 바인딩
----> new 바인딩 > 암시적 바인딩
----> '명시적 바인딩'과 'new 바인딩'을 바로 비교할 수는 없지만 명시적 바인딩이 조금 더 우선순위가 높지만 bind() Polyfill을 사용한다면 new 바인딩이 우선순위가 될 수 있음

# this 규칙 최종
=> new 함수 호출(new binding) - 새로 생성된 객체가 this
=> call(), apply()로 함수 호출(하드 바인딩의 숨겨진 형태로의 호출) - 명시적으로 지정된 객체가 this
=> 객체의 소유, 포함의 형태로 함수 호출 - 객체가 this
=> 그 외에는 this는 기본값 (엄격모드 : undefined / 비엄격모드 : 전역 객체 )

# this 무시
=> call(), apply(), bind() 에서 첫번째 인자가 'null' / 'undefined'인 경우 - this는 기본 규칙
=> 간접 레퍼런스(Indirect References)
=> soft binding - sofrBind() : 명시적으로 this를 지정했기 때문에 유연하지 못함 - 유연하게 만들어 주는 함수 - 수동으로 바인딩 할 수 있음(원하는 객체에 thiㄴ를 바인딩 할 수 있음)
=> 화살표 함수 : 이벤트, 타이머, 콜백에서 사용

# 객체(Object)
=> 선언(Declarative) & 리터럴(Literal) 형식 / 생성자 형식
    + 리터럴 형식 : 한번에 다수의 키, 값을 프로퍼티로 추가 가능
    + 생성자 형식 : 한번에 한 프로퍼티만 추가 가능
=> 타입 : null / undefined / boolean / number / string / object / symbol
=> 내장 객체 : String / Number / Boolean / Object / Function / Array / Date / RegExp / Error
    + 타입처럼 보이는 내장 메서드

* 얕은 복사(Shallow Copy) 
* 깊은 복사(Deep Copy)
* Object.assign({타겟 객체}, 소스객체) - 할당에 의해서 복사

# 프로퍼티 서술자(데이터 서술자)
  ex-1) 프로퍼티 특성 조회
        var obj = {a:2};
        console.log(Object.getOwnPropertyDescriptor(obj, 'a'));
        // { value: 2, writable: true, enumerable: true, configurable: true }가 나옴
        // 프로퍼티 서술자(데이터 서술자)확인방법 -> 4가지 특성이 있음
  
  ex-2) 프로퍼티 수정
        var obj = {}
        Object.defineProperty(obj, 'a', { value: 2, writable: true, enumerable: true, configurable: true } );
        console.log(obj.a);
        //  value값인 2가 나옴
        // Object.defineProperty()를 통해 새로운 프로퍼티를 추가, 특성 수정 가능
        // 단, configurable: true일때만

  ex-3) 쓰기 가능(writable) - true / false 로 조정
        var obj = {}
        Object.defineProperty(obj, 'a', { value: 2, writable: false, enumerable: true, configurable: true } );
        obj.a = 3;
        // 값을 변경함
        console.log(obj.a);
        //  value값이 그대로 2가 나옴
        // 값이 변경되지 않았음
        -> 엄격모드에서는 error 발생

  ex-4) 설정 가능(configurable)
        var obj = { a : 2};
        obj.a = 3;
        console.log(obj.a); 
        // 3 이 나옴
        Object.defineProperty(obj, 'a', { value: 4, writable: true, enumerable: true, configurable: false } );
        console.log(obj.a);
        // 4 가 나옴
        obj.a = 5;
        console.log(obj.a);
        // 5 가 나옴
        Object.defineProperty(obj, 'a', { value: 6, writable: true, enumerable: true, configurable: true } );
        console.log(obj.a);
        -> 엄격 모드 상관없이 error 발생
        -> configurable:false로 설정하면 서술자 변경, 프로퍼티 삭제 다 할 수 없음

  ex-5) 열거 가능(enumerable)
        -> 객체 프로퍼티의 표출 여부를 나타냄
        -> enumerable:false로 설정되면 프로퍼티 접근은 가능하지만 루프 구문에서 감춰짐
        -> 감추고 싶은 프로퍼티에 한하여 false세팅할 것

# 불변성 
=> myImmutableObject : 불변 객체 생성해 줌
=> writable: false, configurable: false를 사용해서 객체 상수처럼 쓸 수 있음 
=> Object.preventExtension() : 객체에 프로퍼티를 추가 할 수 없게 차단해 주는 메서드 
----> Object.preventExtension() - 프로퍼터를 추가해도 추가가 되지 않음
=> Object.seal() : 봉인된 객체 생성
----> Object.seal()실행하면 configurable: false로 처리 - 프로퍼티를 추가 할 수 없고, 기존 프로퍼티의 재설정이나 삭제도 불가 
=> Object.freeze() : Object.seal()를 적용하고도 데이터 접근자의 프로퍼티를 모두 writable: false처리

# [[Get]] / [[Put]]
=> 프로퍼티 접근 / 호출
=> 이미 존재하거나 새로운 프로퍼티의 값을 조회, 세팅해줌

# 게터와 세터
=> 접근 서술자(Accessor Descriptor) : 프로퍼티가 게터나 세터 어느 한쪽이거나 동시에 될 수 있도록 정의 한 것
----> 데이터 서술자와 반대
----> 프로퍼티 값과 writable의 속성은 무시됨
  ex-1)
        var obj = {
          get a() {
          <!-- a의 게터를 정의 -->
          return 2;
          }
        }
        Object.defineProperty(
          obj, 
          <!-- 타깃 -->
          'b',
          <!-- 프로퍼티이름 -->
          {<!-- 서술자 -->
          get : function(){return this.a*2},
          <!-- b의 게터 정의 -->
          enumerable :true
          <!-- b가 객체 프로퍼티로 확실하게 표시 되게 함 -->
        });
        console.log(obj.a);
        <!-- 2가 나옴 -->
        console.log(obj.b);
        <!-- 4가 나옴 -->

  ex-2)
        var obj = {
          get a() {
          <!-- a의 게터를 정의 -->
          return 2;
          }
        }
        obj.a = 3;
        console.log(obj.a);
        <!-- 2가 나옴 -->
        -> a의 게터가 정의 되어 있어 할당으로 값을 변경하려고 해도 안됨(에러가 나는것이 아니라 무시됨)
        -> a의 게터가 2만 retrun하게 정의 되어있기 때문에

  ex-3)
        var obj = {
          get a(){
           return this._a_;
          },
          set a(val){
           this._a_ = val * 2;
          }
        }
       
        obj.a = 2;
        console.log(obj.a);
        -> 게터와 세터 항상 둘다 선언하는 것이 좋음

# in / hasOwnProperty() -
=> 객체의 프로퍼티의 값이 있는지 없는지 확인 할 때 사용
=> boolean으로 반환
=> 사용법
----> ('프로퍼티' in 객체) - true / fals
----> 객체.hasOwnProperty('프로퍼티) - true / fals

# 순회
=> for in : 객체 프로퍼티를 차례로 순회하는 반복문
* for : 인덱스를 순회할 뿐 값을 순회하는 것은 아님
=> forEach(), every(), some() : 배열 관련 반복문 
=> for of
----> 순회할 원소의 순회자 객체(Iteratot Object)가 있어야함

* @@iterator
* next() 메서드

* 자바스크립트의 객체는 리터럴과 생성자 형식으로 되어 있음
* 대부분 리터럴 형식이나 옵션을 주기 위한 생성자 형식으로 쓰는 경우가 있음
* 객체는 키, 값을 모아놓은 저장소
* 프로퍼티를 통해 접근 가능 (내부에서는 [Get] [Put] 연산을 호출함)
* 프로퍼티 서술자를 통해 제어가능한 속성을 가짐
* for of 문을 사용한 순회가 가능

# 객체지향 프로그래밍
=> OPP(Object Oriented Programing)
=> 인스턴스화(Instantiation), 상속(Inheritance), 다형성(Polymorphism)

# 클래스
=> 캡슐화(Capsulation)
=> 자료구조(Data structure)
=> 오버라이드(재정의)
=> 붕어빵틀(인스턴스화)

# 인스턴스
=> 클래스명과 같은 이름의 생성자함수로 만듦
=> 생성자는 인스턴스에 필요한 정보를 초기화 함
=> new를 키워드 앞에 붙여 생성자 호출(대문자 시작)


















