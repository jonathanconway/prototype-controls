import React from 'react';

const Icon = (props) => {
  let {color, size, value, ...more} = props;
  delete more.className;
  delete more.style;

  let divStyle = {
    display: 'inline-block',
    height: size,
    width: size
  };

  let svgStyle = { marginTop: '5px' };
  if (value.includes('filled')) {
    svgStyle.fill = color;
  } else {
    svgStyle.stroke = color;
  }

  return (
    <div style={divStyle} className="icon">
      <svg
        {...more}
        style={svgStyle}
        width="24px"
        height="24px"
        viewBox="0 0 35 35">
        <g id="Case-studies" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="480-nav/progress-is-open" transform="translate(-41.000000, -296.000000)" fill="#FFFFFF">
                <g id="Progress-bar-to-select-Copy-3" transform="translate(24.000000, 296.000000)">
                    <g id="Completed" transform="translate(17.000000, 0.000000)">
                        <path d="M28.6607485,14.0981929 C28.6607485,14.4776577 28.5268197,14.834801 28.2589623,15.1026584 L16.1384121,27.2232086 C15.8705546,27.4910661 15.4910899,27.6473162 15.1116252,27.6473162 C14.7544819,27.6473162 14.3750171,27.4910661 14.1071597,27.2232086 L6.0267929,19.1428418 C5.75893544,18.8749844 5.62500671,18.5178411 5.62500671,18.1383763 C5.62500671,17.7589116 5.75893544,17.3794469 6.0267929,17.1115894 L8.05804532,15.1026584 C8.32590278,14.834801 8.68304607,14.6785508 9.0625108,14.6785508 C9.44197554,14.6785508 9.79911882,14.834801 10.0669763,15.1026584 L15.1116252,20.1473073 L24.2187789,11.062475 C24.4866363,10.7946176 24.8437796,10.6383674 25.2232444,10.6383674 C25.6027091,10.6383674 25.9598524,10.7946176 26.2277098,11.062475 L28.2589623,13.071406 C28.5268197,13.3392635 28.6607485,13.7187282 28.6607485,14.0981929 Z M34.2857552,17.7142687 C34.2857552,8.24997169 26.6071746,0.571391106 17.1428776,0.571391106 C7.67858058,0.571391106 0,8.24997169 0,17.7142687 C0,27.1785657 7.67858058,34.8571463 17.1428776,34.8571463 C26.6071746,34.8571463 34.2857552,27.1785657 34.2857552,17.7142687 Z" id=""></path>
                    </g>
                </g>
            </g>
        </g>
      </svg>
    </div>
  );
}

Icon.propTypes = {
  color: React.PropTypes.string,
  size: React.PropTypes.number,
  value: React.PropTypes.string.isRequired
};

Icon.defaultProps = {
  color: '#000',
  size: 24
};

export default Icon;
