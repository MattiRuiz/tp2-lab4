import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

// Deberán establecer el test unitario que se compruebe que la funcion mayorDeEdad(age) funciona correctamente. Los test deben devolver true o false según correspondan, si es mayor a 18 o tiene 18 devolver true, si tiene menos de 18 devolver false y si se ingresara algún numero negativo devolver null.

export function mayorDeEdad(age) {
  if (age < 0) {
    return null;
  } else if (age < 18) {
    return false;
  } else {
    return true;
  }
}

const MiComponente = () => {
  const [age, setAge] = useState();

  const ageHandler = (e) => {
    setAge(e.target.value);
  };

  const ageChecker = () => {
    const result = mayorDeEdad(age);
    console.log(result);
  };

  return (
    <div className="py-4">
      <h4>Test tp2 - Lab</h4>
      <Form>
        <Form.Group>
          <Form.Label>Ingrese su edad:</Form.Label>
          <Form.Control type="number" value={age} onChange={ageHandler} />
          <Button onClick={ageChecker} className="mt-3">
            Confirmar
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default MiComponente;
