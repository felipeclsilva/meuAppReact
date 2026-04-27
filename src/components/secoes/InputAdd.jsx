import { useState } from 'react'
import PropTypes from 'prop-types';

export default function InputAdd({ onAdd }) {
    const [value, setValue] = useState("");

    return(
        <>
            <h2>Seção 4</h2>
            <input value={value} onChange={(e) => setValue(e.target.value)} />

            <button onClick={() => { onAdd(value); setValue('') }}>
                Adicionar
            </button>
        </>
    )
}

InputAdd.propTypes = {
    onAdd: PropTypes.func.isRequired,
};