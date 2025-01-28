import React, { useEffect, useState } from 'react';

const mainOptions = [
  {
    text: "Cub de melós de vedella amb salsa de Pedro Ximenez i graten de patata",
    class: "bg-melos",
  },
  {
    text: "Sandvitx orada salvatge amb saltejat de ceba amb bolets i salsa de ceps",
    class: "bg-orada",
  },
  { text: "Opció vegetariana", class: "bg-veggie" },
];

const intolerancesOptions = ["Gluten", "Lactosa", "Marisc"];

const companionOptions = ["Si", "No"];

const Form = () => {
  const localSubmitted = localStorage.getItem("submitted");
  const [submitted, setSubmitted] = useState(localSubmitted === "submitted");
  const [main, setMain] = useState<string>(mainOptions[0].text);
  const [intolerances, setIntolerances] = useState<string[]>([]);
  const [other, setOther] = useState<string>("");
  const [companion, setCompanion] = useState<string>(companionOptions[1]);

  const [main2, setMain2] = useState(
    companion ? mainOptions[0].text : undefined,
  );
  const [intolerances2, setIntolerances2] = useState<string[]>([]);
  const [other2, setOther2] = useState<string>("");

  return (
    <div className="container m-auto flex max-w-screen-md flex-col items-center gap-10">
      {!submitted && (
        <div className="flex flex-col gap-2 px-4">
          <p className="m-auto w-full text-pretty text-center">
            Estem molt feliços de comptar amb tu en aquest dia tan especial.
          </p>
          <p className="m-auto w-full text-pretty text-center">
            El formulari estarà disponible fins al dia <b>05/03/2025</b>;
            després d'aquesta data, ja no es podrà accedir.
          </p>
          <p className="m-auto w-full text-pretty text-center">
            També volem que sàpigues que si la teva idea d'un regal perfecte és
            una cosa útil i pràctica, el nostre compte bancari és{" "}
            <b>ES71 1465 0100 93 1749434297</b>.
          </p>
        </div>
      )}

      {submitted && (
        <div className="flex flex-col gap-2 px-4">
          <p className="m-auto w-full text-pretty text-center">
            Gràcies per omplir el formulari de confirmació.
          </p>
          <p className="m-auto w-full text-pretty text-center">
            Hem enviat una copia de les respostes al teu correu.
          </p>
        </div>
      )}

      <iframe
        name="hidden_iframe"
        id="hidden_iframe"
        style={{ display: "none" }}
        title="hidden_iframe"
        onLoad={() => {
          setSubmitted(true);
          localStorage.setItem("submitted", "submitted");
        }}
      />
      {!submitted && (
        <form
          action="https://docs.google.com/forms/d/e/1FAIpQLSfIxEDZLXM_U7pRkaY9OJ-dq7WCtgLH25dpvJCJEcnmMrfWzw/formResponse?embedded=true"
          method="post"
          target="hidden_iframe"
          className="container flex flex-col gap-8 bg-leaf p-4 dark:bg-sky md:p-10"
        >
          <h3 className="heading-3 pt-4">Dades del convidat</h3>
          <fieldset className="flex w-full flex-col gap-1">
            <label className="text-kalam text-lg" htmlFor={"entry.509811896"}>
              Name
            </label>
            <input
              className="h-8 rounded-md pl-2 dark:text-dark"
              type="text"
              name={"entry.509811896"}
              placeholder={"Name"}
              required={true}
            />
          </fieldset>

          <div className="flex w-full flex-col gap-6 sm:flex-row">
            <fieldset className="flex w-full flex-col gap-1 md:w-1/2">
              <label className="text-kalam text-lg" htmlFor={"emailAddress"}>
                Email
              </label>
              <input
                type="email"
                className="h-8 rounded-md pl-2 dark:text-dark"
                name={"emailAddress"}
                placeholder={"Email"}
                required={true}
              />
            </fieldset>

            <fieldset className="flex w-full flex-col gap-1 md:w-1/2">
              <label className="text-kalam text-lg" htmlFor={"entry.629026583"}>
                Phone
              </label>
              <input
                type="text"
                className="h-8 rounded-md pl-2 dark:text-dark"
                name={"entry.629026583"}
                placeholder={"Phone"}
                required={true}
              />
            </fieldset>
          </div>

          <div className="flex flex-col gap-2">
            <input
              type="hidden"
              name="entry.962280299"
              required={true}
              value={main}
            />
            <legend className="text-kalam text-lg">
              {"Quin plat principal prefereixes?"}
            </legend>
            <fieldset className="flex flex-col justify-between gap-2 md:flex-row">
              {mainOptions.map((option) => {
                const isSelected = main === option.text;
                return (
                  <div
                    className={`flex w-full flex-col gap-2 rounded-md border-4 bg-white md:w-1/3 ${isSelected ? "border-olive dark:border-dark" : "border-white"}`}
                    key={option.text}
                  >
                    <label
                      className="flex flex-row justify-end rounded-md border-2 border-white text-center text-sm md:flex-col"
                      htmlFor={option.text}
                    >
                      <div
                        className={`flex h-32 w-1/2 rounded-md bg-white bg-cover bg-center bg-no-repeat p-2 md:w-full ${option.class}`}
                        key={option.text}
                      >
                        <input
                          type="radio"
                          id={option.text}
                          name="main"
                          style={{
                            appearance: "none",
                            WebkitAppearance: "none", // Para soporte en Safari
                            MozAppearance: "none", // Para soporte en Firefox
                          }}
                          value={option.text}
                          checked={isSelected}
                          onChange={() => setMain(option.text)}
                        />
                      </div>
                      <div
                        className={`md:rounded-r-0 ml-1 flex h-32 w-1/2 items-center justify-center rounded-r-md p-2 md:ml-0 md:mt-1 md:h-20 md:w-full md:rounded-b-md ${isSelected ? "bg-olive dark:bg-dark" : "bg-white text-dark"}`}
                      >
                        {option.text}
                      </div>
                    </label>
                  </div>
                );
              })}
            </fieldset>
          </div>

          <div className="flex flex-col gap-6 md:flex-row">
            <div className="flex w-full flex-col gap-2 md:w-2/3">
              <input
                type="hidden"
                required={true}
                name="entry.1782240739"
                value={intolerances.concat([other]).join(", ") || "No"}
              />
              <legend className="text-kalam text-lg">
                {"Tens alguna al·lèrgia o intolerància?"}
              </legend>
              <fieldset className="flex flex-row flex-wrap gap-4">
                {intolerancesOptions.map((option) => {
                  const isSelected = intolerances.includes(option);
                  return (
                    <label
                      className={`flex w-[47%] rounded-md border-2 border-white bg-white p-0.5 md:w-40`}
                      key={option}
                      htmlFor={option}
                    >
                      <input
                        type="checkbox"
                        id={option}
                        name="intolerances"
                        checked={isSelected}
                        value={option}
                        style={{
                          appearance: "none",
                          WebkitAppearance: "none", // Para soporte en Safari
                          MozAppearance: "none", // Para soporte en Firefox
                        }}
                        onChange={() =>
                          setIntolerances(
                            isSelected
                              ? intolerances.filter((i) => i !== option)
                              : [...intolerances, option],
                          )
                        }
                      />
                      <span
                        className={`w-full rounded-md pl-2 ${isSelected ? "bg-olive dark:bg-dark" : "bg-white text-dark"}`}
                      >
                        {option}
                      </span>
                    </label>
                  );
                })}
                <div className="flex w-[47%] rounded-md border-2 border-white bg-white p-0.5 md:w-40">
                  <input
                    type="hidden"
                    id="other"
                    name="intolerances"
                    checked={other !== ""}
                    style={{
                      appearance: "none",
                      WebkitAppearance: "none", // Para soporte en Safari
                      MozAppearance: "none", // Para soporte en Firefox
                    }}
                  />
                  <input
                    className={`w-full rounded-md pl-2 focus:outline-none ${other !== "" ? "bg-olive dark:bg-dark" : "bg-white text-dark"}`}
                    type="text"
                    name={"other_value"}
                    placeholder={"Other"}
                    onChange={(e) => setOther(e.target.value)}
                  />
                </div>
              </fieldset>
            </div>

            <div className="flex w-full flex-col gap-4 md:w-1/3">
              <input
                type="hidden"
                required={true}
                name="entry.1740548196"
                value={companion}
              />
              <legend className="text-kalam text-lg">
                {"Vindràs acompanyat?"}
              </legend>
              <div className="flex gap-4">
                {companionOptions.map((option) => {
                  const isSelected = option === companion;
                  return (
                    <label
                      className={`flex w-32 rounded-md border-2 border-white bg-white p-0.5 md:w-1/3`}
                      htmlFor={option}
                    >
                      <input
                        type="radio"
                        id={option}
                        style={{
                          appearance: "none",
                          WebkitAppearance: "none", // Para soporte en Safari
                          MozAppearance: "none", // Para soporte en Firefox
                        }}
                        name="companion"
                        value={option}
                        checked={isSelected}
                        onChange={() => setCompanion(option)}
                      />
                      <span
                        className={`w-full rounded-md pl-2 ${isSelected ? "bg-olive dark:bg-dark" : "bg-white text-dark"}`}
                      >
                        {option}
                      </span>
                    </label>
                  );
                })}
              </div>
            </div>
          </div>

          {companion === companionOptions[0] && (
            <>
              <hr className="border-olive" />
              <h3 className="heading-3 pt-4">Dades del acompanyant</h3>
              <fieldset className="flex w-full flex-col gap-1">
                <label
                  className="text-kalam text-lg"
                  htmlFor={"entry.1215336817"}
                >
                  Name
                </label>
                <input
                  className="h-8 rounded-md pl-2 dark:text-dark"
                  type="text"
                  name={"entry.1215336817"}
                  placeholder={"Name"}
                  required={true}
                />
              </fieldset>

              <div className="flex w-full flex-col gap-6 sm:flex-row">
                <fieldset className="flex w-full flex-col gap-1 md:w-1/2">
                  <label
                    className="text-kalam text-lg"
                    htmlFor={"entry.388578684"}
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    className="h-8 rounded-md pl-2 dark:text-dark"
                    name={"entry.388578684"}
                    placeholder={"Email"}
                    required={true}
                  />
                </fieldset>

                <fieldset className="flex w-full flex-col gap-1 md:w-1/2">
                  <label
                    className="text-kalam text-lg"
                    htmlFor={"entry.481350050"}
                  >
                    Phone
                  </label>
                  <input
                    type="text"
                    className="h-8 rounded-md pl-2 dark:text-dark"
                    name={"entry.481350050"}
                    placeholder={"Phone"}
                    required={true}
                  />
                </fieldset>
              </div>

              <div className="flex flex-col gap-2">
                <input
                  type="hidden"
                  name="entry.1235007448"
                  required={true}
                  value={main2}
                />
                <legend className="text-kalam text-lg">
                  {"Quin plat principal prefereixes?"}
                </legend>
                <fieldset className="flex flex-col justify-between gap-2 md:flex-row">
                  {mainOptions.map((option) => {
                    const isSelected = main2 === option.text;
                    return (
                      <div
                        className={`flex w-full flex-col gap-2 rounded-md border-4 bg-white md:w-1/3 ${isSelected ? "border-olive dark:border-dark" : "border-white text-dark"}`}
                        key={`${option.text}-2`}
                      >
                        <label
                          className="flex flex-row justify-end rounded-md border-2 border-white text-center text-sm md:flex-col"
                          htmlFor={`${option.text}-2`}
                        >
                          <div
                            className={`flex h-32 w-1/2 rounded-md bg-white bg-cover bg-center bg-no-repeat p-2 md:w-full ${option.class}`}
                          >
                            <input
                              type="radio"
                              id={`${option.text}-2`}
                              name="main-2"
                              style={{
                                appearance: "none",
                                WebkitAppearance: "none", // Para soporte en Safari
                                MozAppearance: "none", // Para soporte en Firefox
                              }}
                              value={option.text}
                              checked={isSelected}
                              onChange={() => setMain2(option.text)}
                            />
                          </div>
                          <div
                            className={`md:rounded-r-0 ml-1 flex h-32 w-1/2 items-center justify-center rounded-r-md p-2 md:ml-0 md:mt-1 md:h-20 md:w-full md:rounded-b-md ${isSelected ? "bg-olive dark:bg-dark" : "bg-white text-dark"}`}
                          >
                            {option.text}
                          </div>
                        </label>
                      </div>
                    );
                  })}
                </fieldset>
              </div>

              <div className="flex flex-col gap-6 md:flex-row">
                <div className="flex w-full flex-col gap-2">
                  <input
                    type="hidden"
                    required={true}
                    name="entry.858344545"
                    value={intolerances2.concat([other2]).join(", ") || "No"}
                  />
                  <legend className="text-kalam text-lg">
                    {"Tens alguna al·lèrgia o intolerància?"}
                  </legend>
                  <fieldset className="flex flex-row flex-wrap gap-4">
                    {intolerancesOptions.map((option) => {
                      const isSelected = intolerances2.includes(option);
                      return (
                        <label
                          className={`flex w-32 rounded-md border-2 border-white bg-white p-0.5 md:w-40`}
                          key={`${option}-2`}
                          htmlFor={`${option}-2`}
                        >
                          <input
                            type="checkbox"
                            id={`${option}-2`}
                            name="intolerances-2"
                            checked={isSelected}
                            value={option}
                            style={{
                              appearance: "none",
                              WebkitAppearance: "none", // Para soporte en Safari
                              MozAppearance: "none", // Para soporte en Firefox
                            }}
                            onChange={() =>
                              setIntolerances2(
                                isSelected
                                  ? intolerances2.filter((i) => i !== option)
                                  : [...intolerances2, option],
                              )
                            }
                          />
                          <span
                            className={`w-full rounded-md pl-2 ${isSelected ? "bg-olive dark:bg-dark" : "bg-white text-dark"}`}
                          >
                            {option}
                          </span>
                        </label>
                      );
                    })}
                    <div className="flex w-32 rounded-md border-2 border-white bg-white p-0.5 md:w-40">
                      <input
                        type="hidden"
                        id="other-2"
                        name="intolerances-2"
                        checked={other2 !== ""}
                        style={{
                          appearance: "none",
                          WebkitAppearance: "none", // Para soporte en Safari
                          MozAppearance: "none", // Para soporte en Firefox
                        }}
                      />
                      <input
                        className={`w-full rounded-md pl-2 focus:outline-none ${other2 !== "" ? "bg-olive dark:bg-dark" : "bg-white"}`}
                        type="text"
                        name={"other_value_2"}
                        placeholder={"Other"}
                        onChange={(e) => setOther2(e.target.value)}
                      />
                    </div>
                  </fieldset>
                </div>
              </div>
            </>
          )}

          <button
            className="transtion-all m-auto my-8 w-full rounded-md border-4 border-white bg-leaf p-2 text-white duration-300 hover:bg-olive hover:text-dark dark:bg-sky dark:hover:bg-dark dark:hover:text-white sm:w-80"
            type="submit"
          >
            Enviar
          </button>
        </form>
      )}
    </div>
  );
};

export default Form;
