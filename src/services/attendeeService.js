import db from '../models';

const {Attendee, Talk, Meetup} = db;

/**
 * Attendee service class, interfacer for Attendee db model
 */
export default class AttendeeService {
  /**
   * Adds attendee to database
   * @static
   * @param {object} attendee - The Talk to be added to database
   * @return {Promise-Object} A promise object with talk detail.
   * @memberof AttendeeService
   */
  static async create(attendee) {
    const {dataValues: newAttendee} = await Attendee.create(attendee);
    return newAttendee;
  }

  /**
   * Find attendee in database
   * @static
   * @param {any} options
   * @return {promise-object} A promise object
   * @memberof AttendeeService
   */
  static async findAttendee(options) {
    return Attendee.findOne({where: options});
  }

  /**
   * Add attendee to talk
   * @param {object} talkId
   * @param {object} attendeeId
   * @return {Promise<object>} A promise object with role detail.
   * @memberof AttendeeService
   */
  static async matchAttendeeToTalk(talkId, attendeeId) {
    const {dataValues: newMatch} = await Meetup.create({talkId, attendeeId});
    return newMatch;
  }

  /**
   * get all attendees
   * @returns {promise-object} - all attendees
   * @memberof AttendeeService
   */
  static async getAllAttendees() {
    try {
      const attendees = await Attendee.findAll({
        include: [{
          model: Talk,
          as: 'talks',
          required: false,
          attributes: ['talkTitle', 'talkDate'],
          through: {
            model: Meetup,
            attributes: [],
          }
        }],
        attributes: ['firstName', 'lastName'],
        where: {}
      }).map((values) => values.get({plain: true}));
      return attendees;
    } catch (error) {
      console.log('error: ', error);
    }
  }
}
