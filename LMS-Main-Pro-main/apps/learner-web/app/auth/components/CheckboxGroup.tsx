export default function CheckboxGroup({ values, setValues }: any) {
  const options = [
    "Student / Learner access",
    "Institution email login only (Marketplace disabled)",
    "Recovery via email / phone + QR access"
  ];

  return (
    <div style={{ marginTop: 10 }}>
      {options.map((opt) => (
        <label key={opt} style={{ display: "block", margin: "8px 0" }}>
          <input
            type="checkbox"
            checked={values.includes(opt)}
            onChange={() => {
              setValues((prev: string[]) =>
                prev.includes(opt)
                  ? prev.filter((v) => v !== opt)
                  : [...prev, opt]
              );
            }}
          />
          {" "}{opt}
        </label>
      ))}
    </div>
  );
}