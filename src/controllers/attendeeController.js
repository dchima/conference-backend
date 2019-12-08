import {Helpers} from '../utils';
import {AttendeeService} from '../services';

const {create, matchAttendeeToTalk, getAllAttendees} = AttendeeService;
const {successResponse, errorResponse} = Helpers;

/**
 * A collection of methods that controls attendee responses
 * @class AttendeeController
 */
export default class AttendeeController {
  /**
   * Register new attendee
   * @param {object} req
   * @param {object} res
   * @return {JSON} JSON response
   * @memberof AttendeeController
   */
  static async createAttendee(req, res) {
    try {
      const {body} = req;
      const attendee = await create({...body});
      return successResponse(res, attendee, 201);
    } catch (error) {
      errorResponse(res, {});
    }
  }

  /**
   * create event by adding attendee to talk
   * @param {object} req
   * @param {object} res
   * @return {JSON} JSON response
   * @memberof AttendeeController
   */
  static async addAttendeeToTalk(req, res) {
    try {
      let {talkId, attendeeId} = req.query;
      talkId = Number(talkId);
      attendeeId = req.attendeeId;
      const matchEvent = await matchAttendeeToTalk(talkId, attendeeId);
      return successResponse(res, matchEvent, 200);
    } catch (error) {
      errorResponse(res, {});
    }
  }

  /**
   * Get all attendees
   * @static
   * @param {Request} req - The request endpoint
   * @param {Response} res - the response endpoint
   * @return {JSON} -JSON response
   * @memberof AttendeeController
   */
  static async viewAttendees(req, res) {
    try {
      const allAttendees = await getAllAttendees();
      if (!allAttendees.length) {
        return errorResponse(res, {code: 404, message: 'There are no attendees'});
      }
      return successResponse(res, allAttendees, 200);
    } catch (error) {
      errorResponse(res, {});
    }
  }
}
