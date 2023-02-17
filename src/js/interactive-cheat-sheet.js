import 'highlight.js/styles/a11y-dark.css';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import html from 'highlight.js/lib/languages/xml';
import css from 'highlight.js/lib/languages/css';

const initCodeHighlight = () => {
    hljs.registerLanguage('javascript', javascript);
    hljs.registerLanguage('html', html);
    hljs.registerLanguage('css', css);

    return hljs;
};

export default initCodeHighlight;