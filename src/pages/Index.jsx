import { Form, useActionData, redirect } from 'react-router-dom'
import FormLogin from '../components/FormLogin'
import Error from '../components/Error'

export async function action({request}) {
  
  const formData = await request.formData()
  const data = Object.fromEntries(formData)
  
  // validate
  const errors = []
  if(Object.values(data).includes('')) {
    errors.push('Mandatory fields')
  }
  // validate password
  const passwordField = data.user.replace(/[aeiou]/gi, '');
  const passwordTyping = data.password

  if(passwordField.length && passwordField === passwordTyping) {
    return redirect('/weather/c')
  } else {
    errors.push('Must equal to the username without vowels.')
  }
  
  if(Object.keys(errors).length) {
    return errors
  }
}

function Index() {

  const errors = useActionData()

  return (
    <>
      <Form
        className="col-lg-7 mx-auto mb-3"
        method="post"
      >
          { errors?.length && errors.map((error, i) => <Error key={i}>{error}</Error>)}
          <legend className="d-block mb-4 text text-center">
            <p className="text text-w-bold text-size-1-5 text-color-primary mt-0 mb-1">Volante QuickConnect</p>
            <p className="text m-0">Please login to your platform</p>
          </legend>
          <FormLogin />
          <div className="from-group text text-center">
            <button className="btn btn-round btn-round-primary text text-color-white w-100 p-2">LOGIN</button>
            <p className="text text-color-primary">Forgot your password?</p>
          </div>
      </Form>
    </>
  )
}

export default Index