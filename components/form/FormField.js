import React from 'react'
import Field from './Field'
import useFormField from '../../hooks/form/useFormField'

const FormField = ({ name }) => {

    const props = useFormField(name);

    return (
        <Field {...props} />
    )
}

export default FormField
