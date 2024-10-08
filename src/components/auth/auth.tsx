/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { useEffect, useRef, useState } from 'react'
import { SupabaseClient, Provider, AuthError } from '@supabase/supabase-js'
import {
  Input,
  Checkbox,
  Button,
  Typography,
  Divider,
  InputClasses,
  CheckboxClasses,
} from '../../index'
import { Email, Key, Lock, Inbox } from '../icon/icons/line'
import * as SocialIcons from './icons'
// @ts-ignore
import AuthStyles from './auth.module.scss'
import { RipplesProps } from 'react-ripples'
import { ButtonClasses } from '../button/button'
import { DividerClasses } from '../divider/divider'

const VIEWS: ViewsMap = {
  SIGN_IN: 'sign_in',
  SIGN_UP: 'sign_up',
  FORGOTTEN_PASSWORD: 'forgotten_password',
  RESET_PASSWORD: 'reset_password',
  MAGIC_LINK: 'magic_link',
  UPDATE_PASSWORD: 'update_password',
  TERMS_OF_SERVICE: 'terms_of_service',
  PRIVACY_POLICY: 'privacy_policy',
}

interface ViewsMap {
  [key: string]: ViewType
}

type ViewType =
  | 'sign_in'
  | 'sign_up'
  | 'forgotten_password'
  | 'reset_password'
  | 'magic_link'
  | 'update_password'
  | 'terms_of_service'
  | 'privacy_policy'

type RedirectTo = undefined | string

export interface AuthStrings {
  orContinueWith?: string
  emailAddress?: string
  password?: string
  confirmPassword?: string
  rememberMe?: string
  forgotYourPassword?: string
  signIn?: string
  signInWith?: string
  signUp?: string
  signUpWith?: string
  doYouHaveAnAccount?: string
  dontHaveAnAccount?: string
  newPassword?: string
  confirmNewPassword?: string
  resetPassword?: string
  updatePassword?: string
  enterYourNewPassword?: string
  confirmNewPasswordPlaceholder?: string
  agreeToThe?: string
  termsOfService?: string
  privacyPolicy?: string
  yourEmailAddress?: string
  sendResetPasswordInstructions?: string
  goBackToSignIn?: string
  sendMagicLink?: string
  signInWithPassword?: string
}

export interface AuthClassNames {
  container?: string
  socialAuth?: SocialAuthClasses
  emailAuth?: EmailAuthClasses
  magicLink?: MagicLinkClasses
  forgottenPassword?: ForgottenPasswordClasses
  updatePassword?: UpdatePasswordClasses
}

export interface SocialButtonClasses {
  buttonContainer?: string
  button?: ButtonClasses
  buttonContent?: string
  buttonIcon?: string
}

export interface SocialAuthClasses {
  buttonRoot?: string
  buttonContainer?: string
  socialButton?: SocialButtonClasses
  divider?: DividerClasses
}

export interface EmailAuthClasses {
  input?: InputClasses
  buttonContainer?: string
  rememberMeContainer?: string
  checkbox?: CheckboxClasses
  linkContainer?: string
  emailButtonContainer?: string
  emailButton?: ButtonClasses
  emailButtonContent?: string
  buttonIcon?: string
}

export interface MagicLinkClasses {
  buttonContainer?: string
  input?: InputClasses
  button?: ButtonClasses
  buttonContent?: string
  buttonIcon?: string
  link?: string
}

export interface ForgottenPasswordClasses {
  buttonContainer?: string
  input?: InputClasses
  button?: ButtonClasses
  buttonContent?: string
  buttonIcon?: string
  link?: string
}

export interface ResetPasswordClasses {
  buttonContainer?: string
  input?: InputClasses
  button?: ButtonClasses
  buttonContent?: string
  buttonIcon?: string
}

export interface UpdatePasswordClasses {
  buttonContainer?: string
  input?: InputClasses
  button?: ButtonClasses
  buttonContent?: string
  buttonIcon?: string
}

export interface RippleProps {
  socialButton?: RipplesProps
  submitButton?: RipplesProps
}

export interface AuthProps {
  supabaseClient: SupabaseClient
  classNames?: AuthClassNames
  emailValue?: string
  passwordValue?: string
  confirmPasswordValue?: string
  children?: React.ReactNode
  touchScreen?: boolean
  socialLoadingComponent?: JSX.Element
  emailLoadingComponent?: JSX.Element
  style?: React.CSSProperties
  strings?: AuthStrings
  rippleProps?: RippleProps
  socialLayout?: 'horizontal' | 'vertical'
  socialColors?: boolean
  socialButtonSize?: 'tiny' | 'small' | 'medium' | 'large' | 'xlarge'
  providers?: Provider[]
  verticalSocialLayout?: any
  view?: ViewType
  redirectTo?: RedirectTo
  onlyThirdPartyProviders?: boolean
  magicLink?: boolean
  termsOfService?: JSX.Element
  privacyPolicy?: JSX.Element
  emailErrorMessage?: string
  passwordErrorMessage?: string
  confirmPasswordErrorMessage?: string
  onEmailChanged?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onPasswordChanged?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onConfirmPasswordChanged?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onForgotPasswordRedirect?: (e: React.MouseEvent<HTMLAnchorElement>) => void
  onTermsOfServiceRedirect?: (e: React.MouseEvent<HTMLAnchorElement>) => void
  onPrivacyPolicyRedirect?: (e: React.MouseEvent<HTMLAnchorElement>) => void
  onMagicLinkRedirect?: (e: React.MouseEvent<HTMLAnchorElement>) => void
  onSignupRedirect?: (e: React.MouseEvent<HTMLAnchorElement>) => void
  onSigninRedirect?: (e: React.MouseEvent<HTMLAnchorElement>) => void
  onAuthenticating?: (e?: React.FormEvent<HTMLFormElement>) => void
  onEmailConfirmationSent?: (e?: React.FormEvent<HTMLFormElement>) => void
  onPasswordUpdated?: (e?: React.FormEvent<HTMLFormElement>) => void
  onResetPasswordSent?: (e?: React.FormEvent<HTMLFormElement>) => void
  onMagicLinkSent?: (e?: React.FormEvent<HTMLFormElement>) => void
  onSigninError?: (error: AuthError) => void
  onSignupError?: (error: AuthError) => void
  onUpdatePasswordError?: (error: AuthError) => void
  onResetPasswordError?: (error: AuthError) => void
  onMagicLinkError?: (error: AuthError) => void
}

const defaultStrings: AuthStrings = {
  orContinueWith: 'or continue with',
  emailAddress: 'Email address',
  password: 'Password',
  confirmPassword: 'Confirm password',
  rememberMe: 'Remember me',
  forgotYourPassword: 'Forgot your password?',
  signIn: 'Sign in',
  signInWith: 'Sign in with',
  signUp: 'Sign up',
  signUpWith: 'Sign up with',
  doYouHaveAnAccount: 'Do you have an account? Sign in',
  dontHaveAnAccount: "Don't have an account? Sign up",
  newPassword: 'New password',
  confirmNewPassword: 'Confirm new password',
  resetPassword: 'Reset password',
  updatePassword: 'Update password',
  enterYourNewPassword: 'Enter your new password',
  confirmNewPasswordPlaceholder: 'Confirm your new password',
  agreeToThe: 'I agree to the',
  termsOfService: 'Terms of Service',
  privacyPolicy: 'Privacy Policy',
  yourEmailAddress: 'Your email address',
  sendResetPasswordInstructions: 'Send reset password instructions',
  goBackToSignIn: 'Go back to sign in',
  sendMagicLink: 'Send magic link',
  signInWithPassword: 'Sign in with password',
}

function Auth({
  supabaseClient,
  classNames,
  emailValue,
  passwordValue,
  confirmPasswordValue,
  style,
  strings,
  socialLoadingComponent,
  emailLoadingComponent,
  rippleProps = {
    socialButton: {
      color: 'rgba(0, 0, 0, .3)',
      during: 250,
    },
    submitButton: {
      color: 'rgba(0, 0, 0, .3)',
      during: 250,
    },
  },
  socialLayout = 'vertical',
  socialColors = false,
  socialButtonSize = 'large',
  touchScreen = false,
  providers,
  view = 'sign_in',
  emailErrorMessage,
  passwordErrorMessage,
  confirmPasswordErrorMessage,
  redirectTo,
  onlyThirdPartyProviders = false,
  magicLink = false,
  termsOfService,
  privacyPolicy,
  onEmailChanged,
  onPasswordChanged,
  onConfirmPasswordChanged,
  onForgotPasswordRedirect,
  onTermsOfServiceRedirect,
  onPrivacyPolicyRedirect,
  onMagicLinkRedirect,
  onSignupRedirect,
  onSigninRedirect,
  onAuthenticating,
  onEmailConfirmationSent,
  onPasswordUpdated,
  onResetPasswordSent,
  onMagicLinkSent,
  onSigninError,
  onSignupError,
  onUpdatePasswordError,
  onResetPasswordError,
  onMagicLinkError,
}: AuthProps): JSX.Element | null {
  const [authView, setAuthView] = useState(view)
  const verticalSocialLayout = socialLayout === 'vertical' ? true : false

  let containerClasses = [AuthStyles['auth'], classNames?.container]
  useEffect(() => {
    // handle view override
    setAuthView(view)
  }, [view])

  return (
    <div className={containerClasses.join(' ')} style={style}>
      {providers && providers?.length > 0 && (
        <SocialAuth
          classNames={classNames}
          view={view}
          touchScreen={touchScreen}
          socialLoadingComponent={socialLoadingComponent}
          strings={{ ...defaultStrings, ...strings }}
          supabaseClient={supabaseClient}
          verticalSocialLayout={verticalSocialLayout}
          providers={providers}
          rippleProps={rippleProps}
          socialLayout={socialLayout}
          socialButtonSize={socialButtonSize}
          socialColors={socialColors}
          redirectTo={redirectTo}
          onlyThirdPartyProviders={onlyThirdPartyProviders}
          magicLink={magicLink}
          onForgotPasswordRedirect={onForgotPasswordRedirect}
          onTermsOfServiceRedirect={onTermsOfServiceRedirect}
          onPrivacyPolicyRedirect={onPrivacyPolicyRedirect}
          onMagicLinkRedirect={onMagicLinkRedirect}
          onSignupRedirect={onSignupRedirect}
          onSigninRedirect={onSigninRedirect}
          onAuthenticating={onAuthenticating}
          onEmailConfirmationSent={onEmailConfirmationSent}
        />
      )}
      {(authView === VIEWS.SIGN_IN || authView === VIEWS.SIGN_UP) && (
        <EmailAuth
          classNames={classNames?.emailAuth}
          id={authView === VIEWS.SIGN_UP ? 'auth-sign-up' : 'auth-sign-in'}
          touchScreen={touchScreen}
          loadingComponent={emailLoadingComponent}
          emailValue={emailValue}
          passwordValue={passwordValue}
          confirmPasswordValue={confirmPasswordValue}
          strings={{ ...defaultStrings, ...strings }}
          rippleProps={rippleProps}
          supabaseClient={supabaseClient}
          authView={authView}
          setAuthView={setAuthView}
          emailErrorMessage={emailErrorMessage}
          passwordErrorMessage={passwordErrorMessage}
          confirmPasswordErrorMessage={confirmPasswordErrorMessage}
          magicLink={magicLink}
          onEmailChanged={onEmailChanged}
          onPasswordChanged={onPasswordChanged}
          onConfirmPasswordChanged={onConfirmPasswordChanged}
          onForgotPasswordRedirect={onForgotPasswordRedirect}
          onTermsOfServiceRedirect={onTermsOfServiceRedirect}
          onPrivacyPolicyRedirect={onPrivacyPolicyRedirect}
          onMagicLinkRedirect={onMagicLinkRedirect}
          onSignupRedirect={onSignupRedirect}
          onSigninRedirect={onSigninRedirect}
          onAuthenticating={onAuthenticating}
          onEmailConfirmationSent={onEmailConfirmationSent}
          onSigninError={onSigninError}
          onSignupError={onSignupError}
        />
      )}
      {authView === VIEWS.FORGOTTEN_PASSWORD && (
        <ForgottenPassword
          classNames={classNames?.forgottenPassword}
          strings={{ ...defaultStrings, ...strings }}
          touchScreen={touchScreen}
          supabaseClient={supabaseClient}
          redirectTo={redirectTo}
          emailErrorMessage={emailErrorMessage}
          onSigninRedirect={onSigninRedirect}
          onResetPasswordError={onResetPasswordError}
          onResetPasswordSent={onResetPasswordSent}
        />
      )}
      {authView === VIEWS.MAGIC_LINK && (
        <MagicLink
          classNames={classNames?.magicLink}
          strings={{ ...defaultStrings, ...strings }}
          touchScreen={touchScreen}
          supabaseClient={supabaseClient}
          setAuthView={setAuthView}
          redirectTo={redirectTo}
          emailErrorMessage={emailErrorMessage}
          onMagicLinkError={onMagicLinkError}
          onMagicLinkSent={onMagicLinkSent}
        />
      )}
      {authView === VIEWS.UPDATE_PASSWORD && (
        <UpdatePassword
          classNames={classNames?.updatePassword}
          strings={{ ...defaultStrings, ...strings }}
          touchScreen={touchScreen}
          supabaseClient={supabaseClient}
          passwordErrorMessage={passwordErrorMessage}
          onUpdatePasswordError={onUpdatePasswordError}
          onPasswordUpdated={onPasswordUpdated}
        />
      )}
      {authView === VIEWS.TERMS_OF_SERVICE && (
        <TermsOfService termsOfService={termsOfService} />
      )}
      {authView === VIEWS.PRIVACY_POLICY && (
        <PrivacyPolicy privacyPolicy={privacyPolicy} />
      )}
    </div>
  )
}

function SocialButton({
  classNames,
  provider,
  isLoading,
  loadingComponent,
  strings,
  touchScreen,
  rippleProps = {
    color: 'rgba(0, 0, 0, .3)',
    during: 250,
  },
  verticalSocialLayout,
  socialButtonSize = 'large',
  signLabel,
  socialColors,
  handleProviderSignIn,
}: {
  classNames?: SocialButtonClasses
  provider: Provider
  isLoading: boolean
  loadingComponent?: JSX.Element
  touchScreen?: boolean
  strings: AuthStrings
  rippleProps?: RipplesProps
  verticalSocialLayout: any
  socialButtonSize: 'tiny' | 'small' | 'medium' | 'large' | 'xlarge' | undefined
  signLabel: string
  socialColors: boolean
  handleProviderSignIn: (provider: Provider) => void
}) {
  // @ts-ignore
  const AuthIcon = SocialIcons[provider]
  const [isHover, setIsHover] = useState(false)
  const handleMouseEnter = () => {
    setIsHover(true)
  }
  const handleMouseLeave = () => {
    setIsHover(false)
  }

  const buttonStyles: any = {
    azure: {
      backgroundColor: '#008AD7',
      color: 'white',
    },
    bitbucket: {
      backgroundColor: '#205081',
      color: 'white',
    },
    facebook: {
      backgroundColor: '#4267B2',
      color: 'white',
    },
    github: {
      backgroundColor: '#333',
      color: 'white',
    },
    gitlab: {
      backgroundColor: '#FC6D27',
    },
    google: {
      backgroundColor: '#ce4430',
      color: 'white',
    },
    twitter: {
      backgroundColor: '#1DA1F2',
      color: 'white',
    },
    apple: {
      backgroundColor: '#000',
      color: 'white',
    },
    discord: {
      backgroundColor: '#404fec',
      color: 'white',
    },
    twitch: {
      backgroundColor: '#9146ff',
      color: 'white',
    },
    spotify: {
      backgroundColor: '#1ed760',
      color: 'white',
    },
  }

  const buttonHoverStyles: any = {
    azure: {
      backgroundColor: '#015280',
      color: 'white',
    },
    bitbucket: {
      backgroundColor: '#194066',
      color: 'white',
    },
    facebook: {
      backgroundColor: '#22365d',
      color: 'white',
    },
    github: {
      backgroundColor: '#404040',
      color: 'white',
    },
    gitlab: {
      backgroundColor: '#7e2b02',
      color: 'white',
    },
    google: {
      backgroundColor: '#672318',
      color: 'white',
    },
    twitter: {
      backgroundColor: '#074d78',
      color: 'white',
    },
    apple: {
      backgroundColor: '#fff',
      color: 'black',
    },
    discord: {
      backgroundColor: '#0b1474',
      color: 'white',
    },
    twitch: {
      backgroundColor: '#330080',
      color: 'white',
    },
    spotify: {
      backgroundColor: '#0f7031',
      color: 'white',
    },
  }

  return (
    <div
      className={[
        AuthStyles['button-container'],
        classNames?.buttonContainer,
      ].join(' ')}
      key={provider}
      style={!verticalSocialLayout ? { flexGrow: 1 } : {}}
    >
      <Button
        block
        classNames={classNames?.button}
        type="default"
        shadow
        touchScreen={touchScreen}
        size={socialButtonSize}
        style={{
          ...(socialColors
            ? isHover
              ? buttonHoverStyles[provider]
              : buttonStyles[provider]
            : {}),
        }}
        loading={isLoading}
        loadingComponent={loadingComponent}
        onClick={() => handleProviderSignIn(provider)}
        rippleProps={rippleProps}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className={[
            AuthStyles['button-content'],
            classNames?.buttonContent,
          ].join(' ')}
        >
          <div
            className={[AuthStyles['button-icon'], classNames?.buttonIcon].join(
              ' ',
            )}
          >
            {AuthIcon ? <AuthIcon /> : ''}
          </div>
          {verticalSocialLayout && signLabel + provider}
        </div>
      </Button>
    </div>
  )
}

function SocialAuth({
  classNames,
  style,
  strings,
  touchScreen,
  socialLoadingComponent,
  rippleProps = {
    socialButton: {
      color: 'rgba(0, 0, 0, .3)',
      during: 250,
    },
    submitButton: {
      color: 'rgba(0, 0, 0, .3)',
      during: 250,
    },
  },
  supabaseClient,
  children,
  socialLayout = 'vertical',
  socialColors = false,
  socialButtonSize = 'large',
  providers,
  verticalSocialLayout,
  redirectTo,
  onlyThirdPartyProviders,
  magicLink,
  onAuthenticating,
  onSigninError,
  onSignupError,
  ...props
}: AuthProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const handleProviderSignIn = (provider: Provider) => {
    setTimeout(async () => {
      setIsLoading(true)
      const { error } = await supabaseClient.auth.signInWithOAuth({
        provider,
        options: {
          redirectTo,
        },
      })
      if (error) {
        if (props.view == 'sign_in') {
          onSigninError?.(error)
        } else if (props.view === 'sign_up') {
          onSignupError?.(error)
        } else {
          onAuthenticating ? onAuthenticating?.() : null
        }
      }

      setIsLoading(false)
    }, rippleProps.submitButton?.during)
  }

  const signLabel =
    props.view === 'sign_up'
      ? `${strings?.signUpWith} `
      : `${strings?.signInWith} `
  return (
    <div>
      {providers && providers.length > 0 && (
        <React.Fragment>
          <div
            className={[
              AuthStyles['button-root'],
              classNames?.socialAuth?.buttonRoot,
            ].join(' ')}
          >
            <div
              className={[
                AuthStyles['button-container'],
                classNames?.socialAuth?.buttonContainer,
              ].join(' ')}
            >
              {providers.map((provider) => {
                return (
                  <SocialButton
                    touchScreen={touchScreen}
                    classNames={classNames?.socialAuth?.socialButton}
                    key={`${provider}-button`}
                    provider={provider}
                    verticalSocialLayout={verticalSocialLayout}
                    socialButtonSize={socialButtonSize}
                    signLabel={signLabel}
                    socialColors={socialColors}
                    strings={strings!}
                    rippleProps={rippleProps.socialButton}
                    isLoading={isLoading}
                    loadingComponent={socialLoadingComponent}
                    handleProviderSignIn={handleProviderSignIn}
                  />
                )
              })}
            </div>
          </div>
          {!onlyThirdPartyProviders && (
            <Divider
              classNames={{
                divider: [
                  AuthStyles['divider'],
                  classNames?.socialAuth?.divider?.divider,
                ].join(' '),
                content: classNames?.socialAuth?.divider?.content,
              }}
            >
              {strings?.orContinueWith}
            </Divider>
          )}
        </React.Fragment>
      )}
    </div>
  )
}

function EmailAuth({
  classNames,
  emailValue,
  passwordValue,
  confirmPasswordValue,
  authView,
  strings,
  loadingComponent,
  rippleProps = {
    socialButton: {
      color: 'rgba(0, 0, 0, .3)',
      during: 250,
    },
    submitButton: {
      color: 'rgba(0, 0, 0, .3)',
      during: 250,
    },
  },
  touchScreen,
  id,
  supabaseClient,
  magicLink,
  emailErrorMessage,
  passwordErrorMessage,
  confirmPasswordErrorMessage,
  onEmailChanged,
  onPasswordChanged,
  onConfirmPasswordChanged,
  onForgotPasswordRedirect,
  onTermsOfServiceRedirect,
  onPrivacyPolicyRedirect,
  onMagicLinkRedirect,
  onSignupRedirect,
  onSigninRedirect,
  onAuthenticating,
  onEmailConfirmationSent,
  onSigninError,
  onSignupError,
}: {
  classNames?: EmailAuthClasses
  emailValue?: string
  passwordValue?: string
  touchScreen?: boolean
  confirmPasswordValue?: string
  loadingComponent?: JSX.Element
  authView: ViewType
  strings: AuthStrings
  rippleProps: RippleProps
  id: 'auth-sign-up' | 'auth-sign-in'
  setAuthView: any
  supabaseClient: SupabaseClient
  magicLink?: boolean
  emailErrorMessage?: string
  passwordErrorMessage?: string
  confirmPasswordErrorMessage?: string
  onEmailChanged?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onPasswordChanged?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onConfirmPasswordChanged?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onForgotPasswordRedirect?: (e: React.MouseEvent<HTMLAnchorElement>) => void
  onTermsOfServiceRedirect?: (e: React.MouseEvent<HTMLAnchorElement>) => void
  onPrivacyPolicyRedirect?: (e: React.MouseEvent<HTMLAnchorElement>) => void
  onMagicLinkRedirect?: (e: React.MouseEvent<HTMLAnchorElement>) => void
  onSignupRedirect?: (e: React.MouseEvent<HTMLAnchorElement>) => void
  onSigninRedirect?: (e: React.MouseEvent<HTMLAnchorElement>) => void
  onAuthenticating?: (e?: React.FormEvent<HTMLFormElement>) => void
  onEmailConfirmationSent?: (e: React.FormEvent<HTMLFormElement>) => void
  onSigninError?: (error: AuthError) => void
  onSignupError?: (error: AuthError) => void
}) {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [rememberMe, setRememberMe] = useState(false)
  const [termAgreementChecked, setTermAgreementChecked] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setTimeout(async () => {
      setIsLoading(true)
      switch (authView) {
        case 'sign_in':
          const authSignin = await supabaseClient.auth.signInWithPassword({
            email: emailValue ?? '',
            password: passwordValue ?? '',
          })
          setIsLoading(false)
          if (authSignin.error) onSigninError?.(authSignin.error)
          else {
            onAuthenticating ? onAuthenticating?.(e) : null
          }
          break
        case 'sign_up':
          if (passwordValue !== confirmPasswordValue) {
            onSigninError?.(
              new AuthError('Confirm password does not match', 401),
            )
            break
          }

          const authSignup = await supabaseClient.auth.signUp({
            email: emailValue ?? '',
            password: passwordValue ?? '',
          })
          setIsLoading(false)
          if (authSignup.error) onSignupError?.(authSignup.error)
          // Check if session is null -> email confirmation setting is turned on
          else if (authSignup.data.user && !authSignup.data.session)
            onEmailConfirmationSent?.(e)
          else {
            onAuthenticating?.(e)
          }
          break
      }
    }, rippleProps?.submitButton?.during ?? 0)
  }

  return (
    <form id={id} onSubmit={handleSubmit}>
      <div>
        <div>
          <Input
            key={'email'}
            classNames={classNames?.input}
            label={strings.emailAddress}
            error={emailErrorMessage}
            autoComplete="email"
            value={emailValue}
            icon={<Email size={21} strokeWidth={0} />}
            onChange={(e) => {
              onEmailChanged?.(e)
            }}
          />
          <Input
            key={'password'}
            classNames={classNames?.input}
            label={strings.password}
            error={passwordErrorMessage}
            reveal={true}
            password={true}
            value={passwordValue}
            autoComplete="current-password"
            icon={<Key size={21} strokeWidth={0} />}
            onChange={(e) => {
              onPasswordChanged?.(e)
            }}
          />
          {authView === VIEWS.SIGN_UP && (
            <Input
              key={'confirm-password'}
              classNames={classNames?.input}
              label={strings.confirmPassword}
              error={confirmPasswordErrorMessage}
              reveal={true}
              password={true}
              value={confirmPasswordValue}
              autoComplete="current-password"
              icon={<Key size={21} strokeWidth={0} />}
              onChange={(e) => {
                onConfirmPasswordChanged?.(e)
              }}
            />
          )}
        </div>
        <div
          className={[
            AuthStyles['button-container'],
            classNames?.buttonContainer,
          ].join(' ')}
        >
          <div
            className={[
              AuthStyles['remember-me-container'],
              classNames?.rememberMeContainer,
            ].join(' ')}
          >
            {authView === VIEWS.SIGN_IN && (
              <Checkbox
                classNames={classNames?.checkbox}
                label={strings.rememberMe ?? ''}
                name="remember_me"
                id="remember_me"
                onChange={(value: React.ChangeEvent<HTMLInputElement>) =>
                  setRememberMe(value.target.checked)
                }
                checked={rememberMe}
              />
            )}
            {authView === VIEWS.SIGN_IN && (
              <Typography.Link
                className={AuthStyles['link']}
                href={'#'}
                onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                  onForgotPasswordRedirect ? onForgotPasswordRedirect(e) : null
                  e.preventDefault()
                }}
              >
                {strings.forgotYourPassword}
              </Typography.Link>
            )}
            {authView === VIEWS.SIGN_UP && (
              <Checkbox
                classNames={classNames?.checkbox}
                label={
                  <span>
                    {strings.agreeToThe} &nbsp;
                    <Typography.Link
                      href={'#'}
                      onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                        onTermsOfServiceRedirect
                          ? onTermsOfServiceRedirect(e)
                          : null
                        e.preventDefault()
                      }}
                    >
                      {strings.termsOfService}
                    </Typography.Link>
                    &nbsp; & &nbsp;
                    <Typography.Link
                      href={'#'}
                      onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                        onPrivacyPolicyRedirect
                          ? onPrivacyPolicyRedirect(e)
                          : null
                        e.preventDefault()
                      }}
                    >
                      {strings.privacyPolicy}
                    </Typography.Link>
                  </span>
                }
                name="term_agreement"
                id="term_agreement"
                onChange={(value: React.ChangeEvent<HTMLInputElement>) =>
                  setTermAgreementChecked(value.target.checked)
                }
                checked={termAgreementChecked}
              />
            )}
          </div>
          <div
            className={[
              AuthStyles['email-button-container'],
              classNames?.emailButtonContainer,
            ].join(' ')}
          >
            <Button
              touchScreen={touchScreen}
              classNames={classNames?.emailButton}
              loading={isLoading}
              loadingComponent={loadingComponent}
              htmlType="submit"
              type="primary"
              size="large"
              disabled={
                authView === VIEWS.SIGN_UP ? !termAgreementChecked : false
              }
              block
              rippleProps={rippleProps?.submitButton}
            >
              <div
                className={[
                  AuthStyles['button-content'],
                  AuthStyles['email-button-content'],
                  classNames?.emailButtonContent,
                ].join(' ')}
              >
                <div
                  className={[
                    AuthStyles['button-icon'],
                    classNames?.buttonIcon,
                  ].join(' ')}
                >
                  <Lock size={21} strokeWidth={0} />
                </div>
                {authView === VIEWS.SIGN_IN ? strings.signIn : strings.signUp}
              </div>
            </Button>
          </div>
        </div>
        <div
          className={[
            AuthStyles['link-container'],
            classNames?.linkContainer,
          ].join(' ')}
        >
          {authView === VIEWS.SIGN_IN && magicLink && (
            <Typography.Link
              href={'#'}
              onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                onMagicLinkRedirect ? onMagicLinkRedirect(e) : null
                e.preventDefault()
              }}
            >
              Sign in with magic link
            </Typography.Link>
          )}
          {authView === VIEWS.SIGN_IN ? (
            <Typography.Link
              href={'#'}
              onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                onSignupRedirect ? onSignupRedirect(e) : null
                e.preventDefault()
              }}
            >
              {strings.dontHaveAnAccount}
            </Typography.Link>
          ) : (
            <Typography.Link
              href={'#'}
              onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                onSigninRedirect ? onSigninRedirect(e) : null
                e.preventDefault()
              }}
            >
              {strings.doYouHaveAnAccount}
            </Typography.Link>
          )}
        </div>
      </div>
    </form>
  )
}

function MagicLink({
  classNames,
  setAuthView,
  strings,
  touchScreen,
  loadingComponent,
  supabaseClient,
  redirectTo,
  rippleProps = {
    color: 'rgba(0, 0, 0, .3)',
    during: 250,
  },
  emailErrorMessage,
  onMagicLinkSent,
  onMagicLinkError,
}: {
  classNames?: MagicLinkClasses
  touchScreen?: boolean
  loadingComponent?: JSX.Element
  setAuthView: any
  strings: AuthStrings
  supabaseClient: SupabaseClient
  redirectTo?: RedirectTo
  emailErrorMessage?: string
  rippleProps?: RipplesProps
  onMagicLinkSent?: (e: React.FormEvent<HTMLFormElement>) => void
  onMagicLinkError?: (error: AuthError) => void
}) {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [email, setEmail] = useState('')

  const handleMagicLinkSignIn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setTimeout(async () => {
      setIsLoading(true)
      const { error } = await supabaseClient.auth.signInWithOtp({
        email,
        options: {
          emailRedirectTo: redirectTo,
        },
      })
      setIsLoading(false)
      if (error) onMagicLinkError?.(error)
      else onMagicLinkSent?.(e)
    }, rippleProps?.during ?? 0)
  }

  return (
    <form id="auth-magic-link" onSubmit={handleMagicLinkSignIn}>
      <div>
        <div
          className={[
            AuthStyles['button-container'],
            classNames?.buttonContainer,
          ].join(' ')}
        >
          <Input
            classNames={classNames?.input}
            label={strings.emailAddress}
            placeholder={strings.yourEmailAddress}
            error={emailErrorMessage}
            icon={<Email size={21} strokeWidth={0} />}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
          />
          <Button
            classNames={classNames?.button}
            touchScreen={touchScreen}
            loading={isLoading}
            loadingComponent={loadingComponent}
            block
            size="large"
            htmlType="submit"
            rippleProps={rippleProps}
          >
            <div
              className={[
                AuthStyles['button-content'],
                AuthStyles['email-button-content'],
                classNames?.buttonContent,
              ].join(' ')}
            >
              <div
                className={[
                  AuthStyles['button-icon'],
                  classNames?.buttonIcon,
                ].join(' ')}
              >
                <Inbox size={21} strokeWidth={0} />
              </div>
              {strings.sendMagicLink}
            </div>
          </Button>
        </div>
        <Typography.Link
          className={[AuthStyles['link'], classNames?.link].join(' ')}
          href="#auth-sign-in"
          onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
            e.preventDefault()
            setAuthView(VIEWS.SIGN_IN)
          }}
        >
          {strings.signInWithPassword}
        </Typography.Link>
      </div>
    </form>
  )
}

function ForgottenPassword({
  classNames,
  strings,
  touchScreen,
  loadingComponent,
  supabaseClient,
  redirectTo,
  emailErrorMessage,
  rippleProps = {
    color: 'rgba(0, 0, 0, .3)',
    during: 250,
  },
  onSigninRedirect,
  onResetPasswordError,
  onResetPasswordSent,
}: {
  classNames?: ForgottenPasswordClasses
  touchScreen?: boolean
  loadingComponent?: JSX.Element
  strings: AuthStrings
  supabaseClient: SupabaseClient
  redirectTo?: RedirectTo
  emailErrorMessage?: string
  rippleProps?: RipplesProps
  onSigninRedirect?: (e: React.MouseEvent<HTMLAnchorElement>) => void
  onResetPasswordError?: (error: AuthError) => void
  onResetPasswordSent?: (e: React.FormEvent<HTMLFormElement>) => void
}) {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [email, setEmail] = useState('')

  const handlePasswordReset = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setTimeout(async () => {
      setIsLoading(true)
      const { error } = await supabaseClient.auth.resetPasswordForEmail(email, {
        redirectTo,
      })
      setIsLoading(false)
      if (error) onResetPasswordError?.(error)
      else onResetPasswordSent?.(e)
    }, rippleProps?.during ?? 0)
  }

  return (
    <form id="auth-forgot-password" onSubmit={handlePasswordReset}>
      <div>
        <div
          className={[
            AuthStyles['button-container'],
            classNames?.buttonContainer,
          ].join(' ')}
        >
          <Input
            classNames={classNames?.input}
            label="Email address"
            placeholder="Your email address"
            error={emailErrorMessage}
            icon={<Email size={21} strokeWidth={0} />}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
          />
          <Button
            touchScreen={touchScreen}
            classNames={classNames?.button}
            loading={isLoading}
            loadingComponent={loadingComponent}
            block
            size="large"
            htmlType="submit"
          >
            <div
              className={[
                AuthStyles['button-content'],
                AuthStyles['email-button-content'],
                classNames?.buttonContent,
              ].join(' ')}
            >
              <div
                className={[
                  AuthStyles['button-icon'],
                  classNames?.buttonIcon,
                ].join(' ')}
              >
                <Inbox size={21} strokeWidth={0} />
              </div>
              {strings.sendResetPasswordInstructions}
            </div>
          </Button>
        </div>
        <Typography.Link
          className={[AuthStyles['link'], classNames?.link].join(' ')}
          href={'#'}
          onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
            onSigninRedirect ? onSigninRedirect(e) : null
            e.preventDefault()
          }}
        >
          {strings.goBackToSignIn}
        </Typography.Link>
      </div>
    </form>
  )
}

function ResetPassword({
  classNames,
  supabaseClient,
  strings,
  touchScreen,
  loadingComponent,
  passwordErrorMessage,
  confirmPasswordErrorMessage,
  rippleProps = {
    color: 'rgba(0, 0, 0, .3)',
    during: 250,
  },
  onResetPasswordError,
  onPasswordUpdated,
}: {
  classNames?: ResetPasswordClasses
  supabaseClient: SupabaseClient
  touchScreen?: boolean
  strings?: AuthStrings
  loadingComponent?: JSX.Element
  passwordErrorMessage?: string
  confirmPasswordErrorMessage?: string
  rippleProps?: RipplesProps
  onResetPasswordError?: (error: AuthError) => void
  onPasswordUpdated?: (e?: React.FormEvent<HTMLFormElement>) => void
}) {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handlePasswordReset = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setTimeout(async () => {
      setIsLoading(true)
      if (password !== confirmPassword) {
        onResetPasswordError?.(
          new AuthError('Confirm password does not match', 401),
        )
        return
      }

      const { error } = await supabaseClient.auth.updateUser({
        password,
      })
      setIsLoading(false)
      if (error) onResetPasswordError?.(error)
      else onPasswordUpdated?.(e)
    }, rippleProps?.during ?? 0)
  }

  strings = { ...defaultStrings, ...strings }

  return (
    <form id="auth-reset-password" onSubmit={handlePasswordReset}>
      <div>
        <div
          className={[
            AuthStyles['button-container'],
            classNames?.buttonContainer,
          ].join(' ')}
        >
          <Input
            classNames={classNames?.input}
            label={strings?.newPassword}
            placeholder={strings?.enterYourNewPassword}
            reveal={true}
            password={true}
            error={passwordErrorMessage}
            icon={<Key size={21} strokeWidth={0} />}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
          />
          <Input
            classNames={classNames?.input}
            label={strings?.confirmNewPassword}
            placeholder={strings?.confirmNewPasswordPlaceholder}
            reveal={true}
            password={true}
            error={confirmPasswordErrorMessage}
            icon={<Key size={21} strokeWidth={0} />}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setConfirmPassword(e.target.value)
            }
          />
          <Button
            block
            touchScreen={touchScreen}
            classNames={classNames?.button}
            loading={isLoading}
            loadingComponent={loadingComponent}
            size="large"
            htmlType="submit"
            rippleProps={rippleProps}
          >
            <div
              className={[
                AuthStyles['button-content'],
                AuthStyles['email-button-content'],
                classNames?.buttonContent,
              ].join(' ')}
            >
              <div
                className={[
                  AuthStyles['button-icon'],
                  classNames?.buttonIcon,
                ].join(' ')}
              >
                <Key size={21} strokeWidth={0} />
              </div>
              {strings?.resetPassword}
            </div>
          </Button>
        </div>
      </div>
    </form>
  )
}

export interface UpdatePasswordProps {
  classNames?: UpdatePasswordClasses
  supabaseClient: SupabaseClient
  touchScreen?: boolean
  loadingComponent?: JSX.Element
  strings: AuthStrings
  passwordErrorMessage?: string
  confirmPasswordErrorMessage?: string
  rippleProps?: RipplesProps
  onUpdatePasswordError?: (error: AuthError) => void
  onPasswordUpdated?: (e?: React.FormEvent<HTMLFormElement>) => void
}

function UpdatePassword({
  classNames,
  supabaseClient,
  strings,
  touchScreen,
  loadingComponent,
  passwordErrorMessage,
  confirmPasswordErrorMessage,
  rippleProps = {
    color: 'rgba(0, 0, 0, .3)',
    during: 250,
  },
  onUpdatePasswordError,
  onPasswordUpdated,
}: UpdatePasswordProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handlePasswordReset = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setTimeout(async () => {
      setIsLoading(true)
      if (password !== confirmPassword) {
        onUpdatePasswordError?.(
          new AuthError('Confirm password does not match', 401),
        )
        return
      }

      const { error } = await supabaseClient.auth.updateUser({ password })
      setIsLoading(false)
      if (error) onUpdatePasswordError?.(error)
      else onPasswordUpdated?.(e)
    }, rippleProps?.during ?? 0)
  }

  strings = { ...defaultStrings, ...strings }

  return (
    <form id="auth-update-password" onSubmit={handlePasswordReset}>
      <div>
        <div
          className={[
            AuthStyles['button-container'],
            classNames?.buttonContainer,
          ].join(' ')}
        >
          <Input
            classNames={classNames?.input}
            label={strings?.newPassword}
            placeholder={strings?.enterYourNewPassword}
            reveal={true}
            password={true}
            error={passwordErrorMessage}
            icon={<Key size={21} strokeWidth={0} />}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
          />
          <Input
            classNames={classNames?.input}
            label={strings?.confirmNewPassword}
            placeholder={strings?.confirmNewPasswordPlaceholder}
            reveal={true}
            password={true}
            error={confirmPasswordErrorMessage}
            icon={<Key size={21} strokeWidth={0} />}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setConfirmPassword(e.target.value)
            }
          />
          <Button
            block
            touchScreen={touchScreen}
            classNames={classNames?.button}
            loading={isLoading}
            loadingComponent={loadingComponent}
            size="large"
            htmlType="submit"
            rippleProps={rippleProps}
          >
            <div
              className={[
                AuthStyles['button-content'],
                AuthStyles['email-button-content'],
                classNames?.buttonContent,
              ].join(' ')}
            >
              <div
                className={[
                  AuthStyles['button-icon'],
                  classNames?.buttonIcon,
                ].join(' ')}
              >
                <Key size={21} strokeWidth={0} />
              </div>
              {strings?.updatePassword}
            </div>
          </Button>
        </div>
      </div>
    </form>
  )
}

function TermsOfService({
  termsOfService,
}: {
  termsOfService: JSX.Element | undefined
}) {
  return (
    <div id="terms-of-service" className="terms-of-service">
      {termsOfService}
    </div>
  )
}

function PrivacyPolicy({
  privacyPolicy,
}: {
  privacyPolicy: JSX.Element | undefined
}) {
  return (
    <div id="privacy-policy" className="privacy-policy">
      {privacyPolicy}
    </div>
  )
}

Auth.ForgottenPassword = ForgottenPassword
Auth.ResetPassword = ResetPassword
Auth.UpdatePassword = UpdatePassword
Auth.TermsOfService = TermsOfService
Auth.PrivacyPolicy = PrivacyPolicy
Auth.MagicLink = MagicLink

export default Auth
