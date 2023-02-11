import { MissingParamError } from '../errors/missing-param-error'
import { type HttpRequest, type HttpResponse } from '../protocols/http'
import { badRequest } from '../helpers/http-helper'
export class SignUpController {
  handle (httpRequest: HttpRequest): HttpResponse {
    const requiredFields = ['name', 'email']
    for (const field of requiredFields) {
      if (httpRequest.body[field] == null) {
        return badRequest(new MissingParamError(field))
      }
    }
    return {
      statusCode: 200
    }
  }
}
