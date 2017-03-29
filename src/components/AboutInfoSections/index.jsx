import React, { Component } from 'react';

import TitleParagraph from '../TitleParagraph';
import InlineList from '../InlineList';
import InlineListItem from '../InlineListItem';

class AboutInfoSections extends Component {
  render() {

    const { } = this.props;

    return (
      <div id="AboutInfoSection" className="w-100 mt5">
        <div className="content-end flex flex-wrap pv5-l pv3 w-80 center cf">
          <div className="w-33-l w-50-m w-100 pr5-ns items-start">
            <TitleParagraph
              title="Inspiration"
              toolTipText="😍"
              paragraph="My family and my friends are constant reminders of humility. My girlfriend and my
                         dogs keep me level headed and inspired to balance my work and my life. Creating
                         a better, more enjoyable life for others motivates my work." />
          </div>
          <div className="w-33-l w-50-m w-100 pr5-ns items-start">
            <TitleParagraph
              title="Hobbies"
              toolTipText="🤓"
              paragraph="When I'm not designing or writing code you can find me writing, playing video games,
                         learning about coffee, trying out new tech, treating my dogs like kids, catching Pokémon, or making music." />
          </div>
          <div className="w-33-l w-50-m w-100 pr5-ns items-start">
          <TitleParagraph
            title="Social"
            toolTipText="🎉" />
            <InlineList>
              <InlineListItem
                inlineListItemLink="https://dribbble.com/fromcortes"
                inlineListItemTitle="Dribbble" />
              <InlineListItem
                inlineListItemLink="https://github.com/fromcortes"
                inlineListItemTitle="Github" />
              <InlineListItem
                inlineListItemLink="https://twitch.tv/cortesarts"
                inlineListItemTitle="Twitch" />
              <InlineListItem
                inlineListItemLink="https://twitter.com/fromcortes"
                inlineListItemTitle="Twitter" />
              <InlineListItem
                inlineListItemLink="https://instagram.com/fromcortes"
                inlineListItemTitle="Instagram" />
              <InlineListItem
                inlineListItemLink="https://youtube.com/cortesarts"
                inlineListItemTitle="YouTube" />
            </InlineList>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutInfoSections;
