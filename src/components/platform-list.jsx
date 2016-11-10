import React from 'react';
import Platform from './platform';

class PlatformList extends React.Component {
  render() {
    let {quickstart, customNavigationAction} = this.props;
    let platforms = quickstart.platforms;

    function comparator(a, b) {
      // show third party quickstarts last
      if (platforms[a].third_party !== platforms[b].third_party) {
        return (platforms[a].third_party) ? 1 : -1;
      }

      // sort alphabetically
      return platforms[a].title.localeCompare(platforms[b].title);
    }

    let items = Object.keys(quickstart.platforms).sort(comparator).map((name, i) => (
      <Platform
        key={quickstart.name + i}
        delay={20 * i}
        quickstart={quickstart}
        platform={quickstart.platforms[name]}
        customNavigationAction={customNavigationAction} />
    ));

    return (
      <div className="container techlist">
        <ul className="circle-list">{items}</ul>
      </div>
    );
  }
  
}

PlatformList.propTypes = {
  quickstart: React.PropTypes.object,
  customNavigationAction: React.PropTypes.func
};

export default PlatformList;
