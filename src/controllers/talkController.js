import {Helpers} from '../utils';
import {TalkService} from '../services';

const {create, getTalks, deleteOne} = TalkService;
const {successResponse, errorResponse} = Helpers;

/**
 * A collection of methods that controls talk responses
 * @class TalkController
 */
export default class TalkController {
  /**
   * Register new talk
   * @static
   * @param {Request} req - The request endpoint
   * @param {Response} res - the response endpoint
   * @return {JSON} -JSON response
   * @memberof TalkController
   */
  static async createTalk(req, res) {
    try {
      const {body} = req;
      const talk = await create({...body});
      return successResponse(res, talk, 201);
    } catch (error) {
      errorResponse(res, {});
    }
  }

  /**
   * Get all talks
   * @static
   * @param {Request} req - The request endpoint
   * @param {Response} res - the response endpoint
   * @return {JSON} -JSON response
   * @memberof TalkController
   */
  static async viewTalks(req, res) {
    try {
      const allTalks = await getTalks();
      if (!allTalks.length) {
        return errorResponse(res, {code: 404, message: 'There are no talks'});
      }
      return successResponse(res, allTalks, 200);
    } catch (error) {
      errorResponse(res, {});
    }
  }

  /**
   * Delete a talk
   * @static
   * @param {object} req
   * @param {object} res
   * @return {JSON}
   * @memberof TalkController
   */
  static async deleteTalk(req, res) {
    try {
      const {talkId} = req.params;
      const id = talkId;
      await deleteOne({id});
      return successResponse(res, 'Talk deleted', 200);
    } catch (error) {
      errorResponse(res, {});
    }
  }
}
