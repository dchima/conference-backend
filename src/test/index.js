import chai, {expect} from 'chai';
import chaiHttp from 'chai-http';
import faker from 'faker';
import server from '..';

chai.use(chaiHttp);

describe('Talk routes', () => {
  it('should succesfully create a new talk with status 201', async () => {
    const talk = {
      presenterName: `${faker.name.firstName()} ${faker.name.lastName()}`,
      talkTitle: 'The inbetween Between us',
      venue: 'Lekki peninsula',
      talkDuration: '30 minutes',
      talkDate: '2019-12-04',
      organization: 'Google Talks',
      isVerified: true,
      talkImage: 'https://www.images.com',
    };
    const response = await chai
        .request(server)
        .post('/api/talks/')
        .send(talk);
    expect(response).to.have.status(201);
    expect(response.body.data).to.be.a('object');
  });
  it('should succesfully get all talks', async () => {
    const response = await chai
        .request(server)
        .get('/api/talks/');
    expect(response).to.have.status(200);
    expect(response.body.data).to.be.a('Array');
  });
});

describe('Attendee routes', () => {
  it('should succesfully register a new attendee with status 201', async () => {
    const attendee = {
      firstName: 'Bolu',
      lastName: 'Olaju',
      email: 'bolawaju@gmail.com'
    };
    const response = await chai
        .request(server)
        .post('/api/attendee/')
        .send(attendee);
    expect(response).to.have.status(201);
    expect(response.body.data).to.be.a('object');
  });
  it('should succesfully register a new attendee with status 201', async () => {
    const attendee = {
      firstName: 'Logan',
      lastName: 'Olaju',
      email: 'logan@gmail.com'
    };
    const response = await chai
        .request(server)
        .post('/api/attendee/')
        .send(attendee);
    expect(response).to.have.status(201);
    expect(response.body.data).to.be.a('object');
  });
  it('should successfully add an attendee to a talk', async () => {
    const response = await chai
        .request(server)
        .post('/api/attendee/attend?talkId=1&email=bolawaju@gmail.com');
    expect(response).to.have.status(200);
    expect(response.body.data).to.be.a('object');
  });
  it('should successfully add an attendee to a talk', async () => {
    const response = await chai
        .request(server)
        .post('/api/attendee/attend?talkId=1&email=logan@gmail.com');
    expect(response).to.have.status(200);
    expect(response.body.data).to.be.a('object');
  });
  it('should succesfully get all attendees', async () => {
    const response = await chai
        .request(server)
        .get('/api/attendee/');
    expect(response).to.have.status(200);
  });
});
