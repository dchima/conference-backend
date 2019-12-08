import db from '../models';

const {Talk} = db;

/**
 * Talk service class, interfacer for Talk db model
 */
export default class TalkService {
  /**
   * Adds talk to database
   * @static
   * @param {object} talk - The Talk to be added to database
   * @return {Promise-Object} A promise object with talk detail.
   * @memberof TalkService
   */
  static async create(talk) {
    const {dataValues: newTalk} = await Talk.create(talk);
    return newTalk;
  }

  /**
   * gets all talks in database
   * @static
   * @return {promise-object}
   * @memberof TalkService
   */
  static async getTalks() {
    return Talk.findAll();
  }

  /**
   * finds talk in database
   * @static
   * @param {any} options
   * @return {promise-Object}
   */
  static async findTalk(options) {
    return Talk.findOne({where: options});
  }

  /**
   * delete talk
   * @static
   * @param {any} options
   * @return {promise-object}
   */
  static async deleteOne(options) {
    return Talk.destroy({where: options});
  }
}
