const { capitalizeFirstLetter } = require('./utils');
const pugFiles = require('./pugPages')();

const folderPath = __dirname.replace('webpack', '').trim().split('/');
const projectName = folderPath[folderPath.length - 2]
	.replace(/-|_/gm, '')
	.toLowerCase()
	.trim()
	.split(' ')
	.map((el) => capitalizeFirstLetter(el))
	.join('');

const generatingPageList = () => {
	let list = '<ol>';
	pugFiles.forEach((pageName) => {
		if (!pageName.includes('index')) {
			const name = pageName
				.replace(/(-|_|.pug|page)/gm, '')
				.toLowerCase()
				.trim()
				.split(' ')
				.map((el) => capitalizeFirstLetter(el))
				.join('');
			const href = `/${pageName.replace('.pug', '.html')}`;
			// const hrefForDeploy = `/${pageName.replace('.pug', '.html')}`;

			list += `<li><a href=${href} target="_blank">${name} Page</a></li>`;
		}
	});

	list += '</ol>';

	return list;
};

const generateTemplaet = () => {
	return `doctype html
  \nhtml(lang="ru")
    head
      title Список всех старниц ${projectName}
      meta(name="format-detection" content="telephone=no")
      meta(http-equiv="X-UA-Compatible" content="IE=edge")
      meta(charset="UTF-8")
      meta(name="viewport" content="width=device-width, initial-scale=1, user-scalable=no")

      style.

        body.index-page-list {
          background-color: #212122;
          color: #fff;
          min-height: 100vh;
          font-family: Arial;		
          padding-top: 40px;
        }

        .box {
          padding: 20px 40px;
          background-color: #000;		
        }

        .head-top {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          margin-top: 24px;
          margin-bottom: 40px;
          justify-content: space-between;
        }

        .head-title {
          font-size: 24px;
          line-height: 1.4em;
        }

        .head-title span {
          color: aquamarine;
        }

        .git-link {
          font-size: 12px;
          line-height: 1.2em;
          display: block;
          margin: 5px 0;
          transition: ease .2s;
          color: rgba(255,255,255, .2)!important;
        }

        .git-link:hover {
          color:  #96fd8b!important;
        }

        a {
          color: #fff;
          position: relative;
          display: inline-block;
          text-decoration: none;
        }

        a::before {
          content: "";
          display: block;
          position: absolute;
          left: 0;
          bottom: 0;
          height: 1px;
          width: 100%;
          background-color: #fff;
          transition: ease .2s;
          transform: scale(0,1);
        }

        a:hover::before {
          transform: scale(1, 1);
        }
        a:visited {
          color: #96fd8b;
        }
        a:visited::before {
          background-color: #96fd8b;
        }

        ol {
          -webkit-column-count: 3;
          -moz-column-count: 3;
          column-count: 3;
          counter-reset: heading;
          padding: 0;
          margin-top: 16px;
          margin-bottom: 25px;
          margin-left: -25px;			
        }

        li {
          font-size: 16px;
          margin-bottom: 8px;
          position: relative;
          padding-left: 30px;
          list-style: none;
          page-break-inside: avoid;		
          counter-increment: heading;	
        }

        li::before {
          position: absolute;
          left: 0;
          top: 0;
          content: counter(heading) ".";
          font-size: 14px;
          color: rgba(241,241,241,.5);
          display: inline-block;
          width: 25px;
          margin-right: 5px;
          text-align: right;
        }


        a:hover {
          text-decoration: none;
        }

        /* Media */
        @media only screen and (max-width: 1023px) {
          ol {
            -webkit-column-count: 3;
            -moz-column-count: 3;
            -column-count: 3;
          }
        }

        @media only screen and (max-width: 767px) {
          ol {
            -webkit-column-count: 2;
            -moz-column-count: 2;
            -column-count: 2;
          }
        }

        @media only screen and (max-width: 576px) {
          ol {
            -webkit-column-count: 1;
            -moz-column-count: 1;
            -column-count: 1;
          }

          .head-title {
            order: 2;
          }

          .git-link {
            order: 1;
            margin-bottom: 15px;
            font-size: 10px;
          }
        }

    body.index-page-list
      .wrap
        .box
          .head-top
            h3.head-title
              | Страницы проекта 
              span «${projectName}»:
            a.git-link(href="https://github.com/ladown?tab=repositories" target="_blank") ladown
          ${generatingPageList()}`;
};

module.exports = { generateTemplaet };
