interface ChildrenProps {
  inputName: string;
  inputValue: string[];
}

export default async function SearchOptions({
  inputName,
  inputValue,
}: ChildrenProps) {
  return (
    <div>
      <label htmlFor='m'>{inputName}</label>
      <select name='optionName' id='a'>
        <option>Beliebig</option>
        {inputName === 'Marke' && (
          <optgroup label='Top-Marken'>
            <option value='audi'>Audi</option>
            <option value='bmw'>BMW</option>
            <option value='mercedes-benz'>Mercedes-Benz</option>
            <option value='volkswagen'>Volkswagen</option>
          </optgroup>
        )}
        {inputName === 'Marke' ? (
          <optgroup label={inputName === 'Marke' ? 'Alle Marken' : ''}>
            {inputValue.map((val, index) => (
              <option key={index} value={val}>
                {val}
              </option>
            ))}
          </optgroup>
        ) : (
          inputValue.map((val, index) => (
            <option key={index} value={val}>
              {val}
            </option>
          ))
        )}
      </select>
    </div>
  );
}
