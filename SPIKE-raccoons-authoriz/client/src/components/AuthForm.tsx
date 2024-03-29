import { ChangeEvent, MouseEvent, useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { UploadFileResponse } from "../@types";

type AuthFormProps = {
  submitTitle: string;
  submit: (email: string, password: string) => Promise<void>;
  Tag?: React.ElementType;
  ButtonTag?: React.ElementType;
  isInput?: boolean;
};

const AuthForm = ({
  submitTitle,
  submit,
  Tag,
  isInput,
  ButtonTag,
}: AuthFormProps) => {
  const { loading } = useContext(AuthContext);
  const [inputValues, setInputValues] = useState({ email: "", password: "" });
  const [selectedFile, setSelectedFile] = useState<File | string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputValues.email || !inputValues.password)
      return alert("all fields must be included");
    await submit(inputValues.email, inputValues.password);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValues({ ...inputValues, [e.target.type]: e.target.value });
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    // console.log("e. :>> ", e.target.files[0]);
    setSelectedFile(e.target.files?.[0] || "");
  };

  const handleSubmitFile = async (e: MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formdata = new FormData();
    console.log("selectedFile :>> ", selectedFile);
    formdata.append("userImage", selectedFile);

    const requestOptions = {
      method: "POST",
      body: formdata,
      // redirect: "follow",
    };
    try {
      const response = await fetch(
        "http://localhost:5002/api/users/pictureUpload",
        requestOptions
      );
      if (!response.ok) {
        console.log("something happened!");
      }
      if (response.ok) {
        const result = (await response.json()) as UploadFileResponse;
        console.log("result :>> ", result);
      }
    } catch (error) {
      console.log("error :>> ", error);
    }
  };

  return (
    <>
      <form
        onSubmit={void handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <input
          type="email"
          placeholder="Email"
          value={inputValues.email}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          value={inputValues.password}
          onChange={handleChange}
        />
        <button type="submit">{loading ? "Loading..." : submitTitle}</button>
      </form>
      <form>
        {isInput && (
          <div>
            {Tag && <Tag type="file" onChange={handleFileChange} />}{" "}
            {ButtonTag && (
              <ButtonTag onClick={handleSubmitFile}>Upload Picture</ButtonTag>
            )}
          </div>
        )}
      </form>
    </>
  );
};

export default AuthForm;
