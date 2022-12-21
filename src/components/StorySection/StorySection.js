import React from 'react';
import SectionTitle from '../SectionTitle';
import shape1 from '../../images/rsvp/shape1.png';
import shape2 from '../../images/rsvp/shape2.png';
import { galleryImage as Images } from '../../constants/images';

const StorySection = () => {
  return (
    <section className="story-section section-padding" id="story">
      <div className="container">
        <div className="row">
          <SectionTitle MainTitle={'Our Sweet Story'} />
        </div>
        <div className="row">
          <div className="col col-xs-12">
            <div className="story-timeline">
              <div className="row">
                <div className="col offset-lg-6 col-lg-6 col-12 text-holder">
                  <span className="heart">
                    <i className="fi flaticon-balloon"></i>
                  </span>
                </div>
              </div>
              <div className="story-timeline-item s1">
                <div className="row align-items-center">
                  <div className="col col-lg-6 col-12">
                    <div
                      className="img-holder right-align-text fadeInLeftSlow"
                      data-wow-duration="1500ms"
                    >
                      <img
                        src={Images.WeEngagedPortrait}
                        className="img img-responsive"
                        alt="stroy"
                      />
                    </div>
                  </div>
                  <div className="col col-lg-6 col-12">
                    <div
                      className="story-text left-align-text fadeInRightSlow"
                      data-wow-duration="2000ms"
                    >
                      <h3>The First Meet</h3>
                      <span className="date">15 May 2022</span>
                      <div className="line-shape">
                        <div className="outer-ball">
                          <div className="inner-ball"></div>
                        </div>
                      </div>
                      <p>
                        We first met in home and the elders were asking
                        questions after we introduced ourselves. We didn't get a
                        chance to make an eye contact but yes, we tried!. We had
                        a chance to talk in private and we never thought that we
                        spent hours and hours though it was the first time. Many
                        discussions happened and finally we said Yes! and we are
                        here.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="story-timeline-item">
                <div className="row align-items-center">
                  <div className="col col-lg-6 col-12 order-lg-1 order-2 text-holder left-text">
                    <div
                      className="story-text right-align-text fadeInLeftSlow"
                      data-wow-duration="2000ms"
                    >
                      <h3>Our First Date</h3>
                      <span className="date">28 May 2022</span>
                      <div className="line-shape s2">
                        <div className="outer-ball">
                          <div className="inner-ball"></div>
                        </div>
                      </div>
                      <p>
                        One fine early morning, Balaji came with a bouquet for
                        Raji. We didn't know it was the date!! We spent our day
                        by visiting temple, taking long walk, and ended up
                        traveling. We did nothing but talk for hours even though
                        we had only known each other for a day. We have been
                        together for months now and it will lasts forever.
                      </p>
                    </div>
                  </div>
                  <div className="col col-lg-6 col-12 order-lg-2 order-1">
                    <div className="img-holder left-align-text">
                      <img
                        src={Images.OurFirstDate}
                        alt="stroy"
                        className="img img-responsive fadeInRightSlow"
                        data-wow-duration="1500ms"
                      />
                      <span className="heart">
                        <i className="fi flaticon-dance"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="story-timeline-item">
                <div className="row align-items-center">
                  <div className="col col-lg-6 col-12">
                    <div className="img-holder right-align-text left-site right-heart">
                      <img
                        src={Images.SheSaidYes}
                        alt="stroy"
                        className="img img-responsive fadeInLeftSlow"
                        data-wow-duration="1500ms"
                      />
                      <span className="heart">
                        <i className="fi flaticon-dove"></i>
                      </span>
                    </div>
                  </div>
                  <div className="col col-lg-6 col-12">
                    <div
                      className="story-text left-align-text fadeInRightSlow"
                      data-wow-duration="2000ms"
                    >
                      <h3>She Said Yes!</h3>
                      <span className="date">14 August 2022</span>
                      <div className="line-shape">
                        <div className="outer-ball">
                          <div className="inner-ball"></div>
                        </div>
                      </div>
                      <p>
                        I was lucky enough to meet this young girl and very
                        quickly I realized she was the one I wanted to share my
                        life with. I asked her to "Marry Me" with all plans in
                        our engagement day with lots and lots of gifts. And she
                        said yes with a smile on her face which worth dying
                        for!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="shape-1">
        <div className="sticky-shape">
          <img src={shape1} alt="" />
        </div>
      </div>
      <div className="shape-2">
        <div className="sticky-shape">
          <img src={shape2} alt="" />
        </div>
      </div>
    </section>
  );
};

export default StorySection;
