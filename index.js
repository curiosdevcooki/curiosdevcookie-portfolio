document.addEventListener('DOMContentLoaded', () => {
  const desktopSvg = `
                <svg xmlns="http://www.w3.org/2000/svg" width="250" height="250" viewBox="0 0 1349.8 742.9">
                  <path d="M1240.7,36.4c0-18.1-15.4-32.8-34.4-32.8H143.5c-19,0-34.4,14.7-34.4,32.8v676.6h1131.6V36.4Z" fill="#fff"
                    stroke-width="0" />
                  <path
                    d="M1240.7,716.7c2.1,0,3.8-1.6,3.8-3.6V36.4c0-20.1-17.1-36.4-38.2-36.4H143.5c-21.1,0-38.2,16.3-38.2,36.4v676.6c0,2,1.7,3.6,3.8,3.6h1131.6ZM112.9,36.4c0-16.1,13.7-29.1,30.6-29.1h1062.9c16.9,0,30.6,13.1,30.6,29.1v673H112.9V36.4Z"
                    fill="#1f191a" stroke-width="0" />
                  <path
                    d="M1217.4,739.2c27.8,0,128.6-2.8,128.6-29.3v-18.2c0-5.3-4.5-9.6-10.1-9.6H13.9c-5.6,0-10.1,4.3-10.1,9.6v18.2c0,26.5,100.8,29.3,128.6,29.3h1085Z"
                    fill="#fff" stroke-width="0" />
                  <path
                    d="M132.4,742.9h1085c6.9,0,42.9-.2,75.3-4.8,38.4-5.4,57.1-14.6,57.1-28.2v-18.2c0-7.3-6.2-13.2-13.9-13.2H13.9c-7.7,0-13.9,5.9-13.9,13.2v18.2c0,13.6,18.7,22.8,57.1,28.2,32.4,4.5,68.4,4.8,75.3,4.8ZM7.6,709.9v-18.2c0-3.3,2.8-6,6.3-6h1322c3.5,0,6.3,2.7,6.3,6v18.2c0,16.9-62.8,25.7-124.8,25.7H132.4c-62,0-124.8-8.8-124.8-25.7Z"
                    fill="#1f191a" stroke-width="0" />
                  <rect x="165.4" y="54.6" width="1019" height="584.7" fill="#6207bd" stroke-width="0" />
                  <image x="165.4" y="54.6" width="1019" height="584.7"
                    href="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/1362px-Placeholder_view_vector.svg.png" />
                  <path
                    d="M1184.4,642.9c2.1,0,3.8-1.6,3.8-3.6V54.6c0-2-1.7-3.6-3.8-3.6H165.4c-2.1,0-3.8,1.6-3.8,3.6v584.7c0,2,1.7,3.6,3.8,3.6h1019ZM169.2,58.3h1011.3v577.4H169.2V58.3Z"
                    fill="#1f191a" stroke-width="0" />
                  <path d="M1342.8,718.4c2.1,0,3.8-1.6,3.8-3.6s-1.7-3.6-3.8-3.6H7c-2.1,0-3.8,1.6-3.8,3.6s1.7,3.6,3.8,3.6h1335.8Z"
                    fill="#1f191a" stroke-width="0" />
                  <path
                    d="M539,678.5c-2.1,0-3.8,1.6-3.8,3.6v4c0,8.7,7.4,15.7,16.5,15.7h246.3c9.1,0,16.5-7.1,16.5-15.7v-4c0-2-1.7-3.6-3.8-3.6s-3.8,1.6-3.8,3.6v4c0,4.7-4,8.4-8.9,8.4h-246.3c-4.9,0-8.9-3.8-8.9-8.4v-4c0-2-1.7-3.6-3.8-3.6Z"
                    fill="#1f191a" stroke-width="0" />
                </svg>`;

  const phoneSvg = `
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="63"
                  height="133"
                  viewBox="0 0 127 263.4"
                >
                  <rect
                    x=".9"
                    y=".9"
                    width="125.2"
                    height="261.5"
                    rx="14.6"
                    ry="14.6"
                    style="fill: #fff; stroke-width: 0px"
                  />
                  <path
                    d="M111.5,263.4H15.6c-8.6,0-15.6-7-15.6-15.6V15.6C0,7,7,0,15.6,0h95.9c8.6,0,15.6,7,15.6,15.6v232.2c0,8.6-7,15.6-15.6,15.6ZM15.6,1.9C8,1.9,1.9,8,1.9,15.6v232.2c0,7.5,6.1,13.7,13.7,13.7h95.9c7.5,0,13.7-6.1,13.7-13.7V15.6c0-7.5-6.1-13.7-13.7-13.7H15.6Z"
                    style="fill: #1f191a; stroke-width: 0px"
                  />
                  <rect
                    x="7.7"
                    y="32.2"
                    width="111.6"
                    height="198.8"
                    style="fill: #3f3e40; stroke-width: 0px"
                  />
                  <image
                    x="7.7"
                    y="32.2"
                    width="111.6"
                    height="198.8"
                    href="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/1362px-Placeholder_view_vector.svg.png"
                  />
                  <path
                    d="M119.3,232H7.7c-.5,0-.9-.4-.9-.9V32.2c0-.5.4-.9.9-.9h111.6c.5,0,.9.4.9.9v198.8c0,.5-.4.9-.9.9ZM8.6,230.1h109.8V33.2H8.6v197Z"
                    style="fill: #1f191a; stroke-width: 0px"
                  />
                  <path
                    d="M73.9,19.4h-20.7c-1.8,0-3.3-1.5-3.3-3.3h0c0-1.9,1.5-3.3,3.3-3.3h20.7c1.8,0,3.3,1.5,3.3,3.3h0c0,1.9-1.5,3.3-3.3,3.3ZM53.2,14.7c-.8,0-1.4.6-1.4,1.4h0c0,.8.6,1.5,1.4,1.5h20.7c.8,0,1.4-.6,1.4-1.4h0c0-.8-.6-1.5-1.4-1.5h-20.7Z"
                    style="fill: #1f191a; stroke-width: 0px"
                  />
                  <rect
                    x="50.4"
                    y="237.7"
                    width="26.3"
                    height="17"
                    rx="1.7"
                    ry="1.7"
                    style="fill: #fff; stroke-width: 0px"
                  />
                  <path
                    d="M73,255.5h-19c-2.4,0-4.4-2-4.4-4.4v-9.7c0-2.4,2-4.4,4.4-4.4h19c2.4,0,4.4,2,4.4,4.4v9.7c0,2.4-2,4.4-4.4,4.4ZM54,238.4c-1.6,0-2.9,1.3-2.9,2.9v9.7c0,1.6,1.3,2.9,2.9,2.9h19c1.6,0,2.9-1.3,2.9-2.9v-9.7c0-1.6-1.3-2.9-2.9-2.9h-19Z"
                    style="fill: #232020; stroke-width: 0px"
                  />
                </svg>`;


  const mockupElements = document.querySelectorAll('.mockups');
  console.log(mockupElements);

  mockupElements.forEach(mockup => {
    mockup.innerHTML = `${desktopSvg}${phoneSvg}`;
    // Or use mockup.insertAdjacentHTML('beforeend', `${desktopSvg}${phoneSvg}`);
  });
});
