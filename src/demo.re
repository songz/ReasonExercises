let setDict carTypes key origKey data=> {
  switch (key) {
    | "none" => {
      data;
    }
    | _ => {
      let cars = Js.Dict.get carTypes key;
      Js.Dict.set data origKey cars;
      data;
    }
  }
};

let rec getCarsForType re carTypes sentenceStruct result => {
  switch (Js.Re.exec sentenceStruct re) {
    | None => {
      result;
    }
    | Some data => {
      let key = (Js.Re.matches data).(0);
      let last = (String.length key) - 1;
      let wType = (String.sub key 1 last);
      let data = setDict carTypes wType key result;
      getCarsForType re carTypes sentenceStruct data;
    }
  }
};

let createParkingComponents carTypes sentenceStruct => {
  let re = [%bs.re "/[0-9]([a-zA-Z]*)/g"];
  let dict = Js.Dict.empty();
  getCarsForType re carTypes sentenceStruct dict;
};

