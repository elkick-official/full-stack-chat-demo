import React, { FunctionComponent } from 'react'
import leftImg from '../../assets/images/chat-bg.jpg'
import registerStyle from './register.module.css'
import { Button, Col, Row } from 'react-bootstrap'
import CDInput from '../../components/CDInput/CDInput'
const Register: FunctionComponent = () => {
  return (
    <div className="d-flex align-items-center">
      <div className={`${registerStyle.authLeft} h-full`}>
        <img
          src={leftImg}
          alt=""
          className={`${registerStyle.authImage} h-inherit`}
        />
      </div>
      <div className={`${registerStyle.authRight} h-full p-5`}>
        <div className="mt-5">
          <h1 className=" fw-600">Register new Account</h1>
          <p className="text-secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            quos accusantium dolores itaque sit deleniti consequatur accusamus
            atque exercitationem maxime aliquid dicta eius reprehenderit amet
            temporibus dolore, deserunt voluptates earum?
          </p>
        </div>
        <Row className="mb-3">
          <Col md={4}>
            <CDInput
              type={'text'}
              name={'firstName'}
              id={'first-name'}
              placeholder={'Enter First Name'}
              handleChange={(event) => console.log(event)}
              //   value={searchText}
              isVisible={true}
              inputLabel="First Name"
              inputLabelClass="text-red-black-color"
              inputCustomClass={'py-4 px-3'}
            />
          </Col>
          <Col md={4}>
            <CDInput
              type={'text'}
              name={'middleName'}
              id={'middle-name'}
              placeholder={'Enter Middle Name'}
              handleChange={(event) => console.log(event)}
              //   value={searchText}
              isVisible={true}
              inputLabel="Middle Name"
              inputLabelClass="text-red-black-color"
              inputCustomClass={'py-4 px-3'}
            />
          </Col>
          <Col md={4}>
            <CDInput
              type={'text'}
              name={'lastName'}
              id={'last-name'}
              placeholder={'Enter Last Name'}
              handleChange={(event) => console.log(event)}
              //   value={searchText}
              isVisible={true}
              inputLabel="Last Name"
              inputLabelClass="text-red-black-color"
              inputCustomClass={'py-4 px-3'}
            />
          </Col>
        </Row>
        <Row>
          <Col md={8} className="mb-3">
            <CDInput
              type={'email'}
              name={'email'}
              id={'email'}
              placeholder={'Enter email'}
              handleChange={(event) => console.log(event)}
              //   value={searchText}
              isVisible={true}
              inputLabel="Email"
              inputLabelClass="text-red-black-color"
              inputCustomClass={'py-4 px-3'}
            />
          </Col>
          <Col md={6}>
            <CDInput
              type={'password'}
              name={'password'}
              id={'password'}
              placeholder={'Enter Password'}
              handleChange={(event) => console.log(event)}
              //   value={searchText}
              isVisible={true}
              inputLabel="Password"
              inputLabelClass="text-red-black-color"
              inputCustomClass={'py-4 px-3'}
            />
          </Col>
          <Col md={6}>
            <CDInput
              type={'password'}
              name={'confirmPassword'}
              id={'confirm-password'}
              placeholder={'Enter Confirm Password'}
              handleChange={(event) => console.log(event)}
              //   value={searchText}
              isVisible={true}
              inputLabel="Confirm Password"
              inputLabelClass="text-red-black-color"
              inputCustomClass={'py-4 px-3'}
            />
          </Col>
        </Row>
        <Button className="mt-3 p-3 custom-button">Register</Button>
        <div
          className={`${registerStyle.socialLogin} d-flex align-items-center`}
        >
          <div
            className={`${registerStyle.facebookBtn} p-3 w-100 text-center rounded-3 cursor-pointer`}
          >
            Facebook
          </div>
          <div
            className={`${registerStyle.googleBtn} p-3 w-100 text-center rounded-3 cursor-pointer`}
          >
            Google
          </div>
          <div
            className={`${registerStyle.twitterBtn} p-3 w-100 text-center rounded-3 cursor-pointer`}
          >
            Twitter
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
