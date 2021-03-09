import { useState } from "react";
import styled from "styled-components";

const SubmitButton = styled.button`
  background-image: linear-gradient(15deg, #13547a 0%, #80d0c7 100%);
  padding: 2% 3% 2% 3%;
  border-radius: 20px;
  box-shadow: 0 10px 10px 0 #78e1e1;
  border: none;
  font-size: 14pt;
  font-weight: bold;
  color: white;
  &:focus {
    outline: none;
  }
`;
const FormElement = styled.form`
  display: grid;
  justify-content: center;
  grid-gap: 2em;
`;

const InputElement = styled.input`
  box-shadow: 0px 10px 10px 0px #78e1e1;
  font-size: 16pt;
  margin-top: 30px;
  border-radius: 20px;
  width: 80vw;
  font-weight: bolder;
  background-color: #cac8c8;
  color: black;
  &:focus {
    outline: none;
  }
  padding-left: 20px;
  line-height: 2em;
`;

const ContainerElementPage = styled.div`
  background-image: url("https://www.evansdist.com/wp-content/uploads/2020/02/Cyber-Security-scaled.jpeg");
  height: 100vh;
  width: 100vw;
  overflow: auto;
  background-position: center;
`;

const Outputcontainer = styled.div`
  display: grid;
  justify-content: center;
  margin-top: 35%;
  margin-left: auto;
  margin-right: auto;
  color: white;
  font-size: 16pt;
  text-shadow: 2px 2px black;
  text-align: center;
`;

const UserNameSpan = styled.span`
  color: #78e1e1;
  font-size: 20pt;
  font-weight: bold;
`;

const PasswordSpan = styled.span`
  color: #78e1e1;
  font-size: 22pt;
  font-weight: bold;
`;

// ----------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------
type Props = {
  value: string;
};

const [secret, setSecret] = useState("");

export default function Home() {
  const [passwordName, setPasswordName] = useState("");
  const [passwordDoc, setPasswordDoc] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    const result = await fetch(
      `http://localhost:3333/api/passwords/${passwordName}`
    );
    const passwordDoc = await result.json();
    setPasswordDoc(passwordDoc);
  }

  function calcColor(length: number): string {
    if (length < 3) return "#6495ED";
    else if (length < 6) return "#1E90FF";
    else if (length < 9) return "#0000FF";
    else if (length < 12) return "#00008B";
    return "F0F8FF";
  }

  const SafeInput = styled.input<Props>`
    background: ${(props) => calcColor(props.value.length)};
    border-radius: 20px;
  `;
  SafeInput;

  return (
    <ContainerElementPage>
      <FormElement onSubmit={(e) => handleSubmit(e)}>
        <InputElement
          // type="password"
          value={passwordName}
          onChange={(event) => setPasswordName(event.target.value)}
        />
        <SafeInput
          value={secret}
          onChange={(event) => setSecret(event.target.value)}
          type="password"
        />
        <SubmitButton type="submit">
          Send request for your password
        </SubmitButton>
      </FormElement>

      {passwordDoc && (
        <Outputcontainer>
          The requested password for your{" "}
          <UserNameSpan>{passwordDoc.name}</UserNameSpan> is:{" "}
          <PasswordSpan>{passwordDoc.value}</PasswordSpan>
        </Outputcontainer>
      )}
    </ContainerElementPage>
  );
}
