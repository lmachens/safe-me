import { useState } from "react";
import styled from "styled-components";

const SubmitButton = styled.button`
  color: red;
`;

const Container = styled.div`
  display: grid;
  height: 100vh;
  width: 100vw;
  place-items: center;
`;

export default function Home() {
  const [passwordName, setPasswordName] = useState("");
  const [passwordDoc, setPasswordDoc] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    const result = await fetch(
      `http://localhost:3001/api/passwords/${passwordName}`
    );
    const passwordDoc = await result.json();
    setPasswordDoc(passwordDoc);
  }
  return (
    <>
      <Container>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            value={passwordName}
            onChange={(event) => setPasswordName(event.target.value)}
          />
          <SubmitButton type="submit">Senden</SubmitButton>
        </form>
        {passwordDoc && (
          <>
            {passwordDoc.name} {passwordDoc.value}
          </>
        )}
      </Container>
    </>
  );
}
