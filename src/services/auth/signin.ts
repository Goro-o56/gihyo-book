import { ApiContext, User } from 'types'
import { fetcher } from 'utils'
export type SigninParams = {
  /**
   * ユーザー名
   * サンプルユーザーの名前は"user"
   */

  username: string

  /**
   * パスワード
   * サンプルユーザーのパスワードは"password"
   */

  password: string
}

/**
 * 認証API
 * @params context APIコンテクスト
 * @params params パラメータ
 * @returns ログインユーザー
 */

const signin = async (
  context: ApiContext,
  params: SigninParams,
): Promise<User> => {
  return await fetcher(
    `${context.apiRootUrl.replace(/\/$/g, '')}/auth/signin`,
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    },
  )
}

export default signin
