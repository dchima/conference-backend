import joi from '@hapi/joi';

/**
 * This class holds methods for validating conference object
 */
export default class conferenceValidation {
  /**
   * Validates talk parameteres
   * @param {object} talkObject - The input talk parameters
   * @return {object | boolean} - returns an object or boolean
   */
  static async validateTalk(talkObject) {
    const schema = {
      presenterName: joi.string().min(3).max(30).required()
          .label('Please enter a presenter name'),
      talkTitle: joi.string().min(3).max(30).required()
          .label('Please enter a talk title'),
      venue: joi.string().min(3).max(30).required()
          .label('Please enter the venue name'),
      talkDuration: joi.string().min(3).max(30).required()
          .label('Please enter a duration'),
      organization: joi.string().min(3).max(30).required()
          .label('Please enter organisation holding talk'),
      talkDate: joi.date().iso()
          .label('Please input a valid date format: yy-mm-dd'),
      talkImage: joi.string().uri().required()
          .label('Please upload an Image of your facility'),
      isVerified: joi.boolean().strict().required(),
    };
    const {error} = joi.validate({...talkObject}, schema);
    if (error) {
      throw error;
    }
    return true;
  }

  /**
   * validates attendee parameters
   * @param {object} attendeeObject
   * @return {object | boolean} - returns object or boolean
   */
  static async validateAttendee(attendeeObject) {
    const schema = {
      firstName: joi.string().min(3).max(25).required()
          .label('Please enter a valid firstname'),
      lastName: joi.string().min(3).max(25).required()
          .label('Please enter a valid lastname'),
      email: joi.string().email().required()
          .label('Please enter a valid email address'),
    };
    const {error} = joi.validate({...attendeeObject}, schema);
    if (error) {
      throw error;
    }
    return true;
  }
}
