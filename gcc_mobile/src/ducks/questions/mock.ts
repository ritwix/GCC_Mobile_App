export const items = ["<h4>Task</h4> <p>As a share trader, you're given the tasks of\n" +
"    evaluating various portfolios that are being held by the bank and determining the value of each <em>portfolio</em>\n" +
"    in order to make future decisions. In this first scenario, you have access to a series of <em>portfolio</em>s that\n" +
"    each contain a subset of 16 stocks.</p> <p>Each of these portfolios can be represented by a 16-bit unsigned integer,\n" +
"    where the <em>k<sup>th</sup></em> bit with value <em>1</em> represents the <em>stock k</em> being present in the\n" +
"    portfolio, and likewise a value of <em>0</em> for <em>bit k</em> means that <em>stock k</em> is not present in the\n" +
"    portfolio.</p> <p>A <em>portfolio</em> can be evaluated as its decimal value. For example, the portfolio that only\n" +
"    contains <em>stock 0</em> and <em>stock 2</em> would be written as <em>[0,...,1,0,1]</em> and therefore has a\n" +
"    evaluated value of <em>5</em>.</p> <p>You've been given the task of finding the best merged portfolio by combining\n" +
"    any two of the portfolios.</p> <p>Two <em>portfolio A</em> and <em>portfolio B</em> can be merged to create <em>portfolio\n" +
"    C</em> with the follow 3 rules:</p>\n" +
"<ol>\n" +
"    <li>For each stock:\n" +
"        <ol>\n" +
"            <li>If it exists in neither <em>portfolio A</em> or <em>portfolio B</em>, then it <strong>doesn't\n" +
"                exist</strong> in <em>portfolio C</em></li>\n" +
"            <li>If a <em>stock</em> exists in just one of <em>portfolio A</em> or <em>portfolio B</em> then it <strong>does\n" +
"                exist</strong> in <em>portfolio C</em></li>\n" +
"            <li>If a stock exists in both <em>portfolio A</em> and <em>B</em>, due to conflicts of interest, this cannot\n" +
"                exist in <em>portfolio C</em>.\n" +
"            </li>\n" +
"        </ol>\n" +
"    </li>\n" +
"</ol> <p>Therefore consider the following example.</p> <p>The <em>portfolio A</em> with decimal evaluation value <em>10\n" +
"    = [0,...,1,0,1,0]</em> and <em>portfolio B</em> with decimal evaluation value <em>[0,...,0,1,1,0]</em> have the\n" +
"    combined portfolio <em>[0,...,1,1,0,0]</em> which has a decimal evaluation value of 12.</p> <p>Your task is to find,\n" +
"    given a set of <em>portfolios</em>, represented by their decimal values, to find the maximum evaluated value of a\n" +
"    combined <em>portfolio</em> that can be made by combining any two of the provided <em>portfolios</em>.</p> <h4>\n" +
"    Constraints</h4> <p>Your input will be an array = <em>[p<sub>1</sub>, p<sub>2</sub>, p<sub>3</sub>, ... ,\n" +
"    p<sub>N</sub>]</em> where <em>N &lt;= 100</em> For each porfolio p<sub>i</sub> in this array, these will have a\n" +
"    maximum decimal value of <em>2<sup>16</sup>-1</em> since we're using unsigned integers.</p> <h4>Examples</h4> <p>In\n" +
"    the following example, we'll be considering 4 portfolios, each containing a subsets of 4 stocks.</p> <h5>Example\n" +
"    1</h5> <p><code> input: [15, 8, 6, 7] output: 15 </code></p> <p>If we consider the first pair, we have <em>15 =\n" +
"    [1,1,1,1]</em> and <em>8 = [1,0,0,0]</em> which has a combined portfolio value of <em>[0,1,1,1] = 7</em>.</p> <p>The\n" +
"    pair that gives us the maximum evaluation value is the combined portfolio from 8 and 7. We have <em>8 =\n" +
"        [1,0,0,0]</em> and <em>7 = [0,1,1,1]</em> with the combined portfolio value of <em>[1,1,1,1] = 15</em>.</p> <h5>\n" +
"    Example 2</h5> <p><code> input: [9, 7, 12, 2] output: 14 </code></p> <p>If we consider the portfolios <em>9 =\n" +
"    [1,0,0,1]</em> and <em>7 = [0,1,1,1]</em> we get the combined portfolio of <em>[1,1,1,0]</em> which has an\n" +
"    evaluation value of 14.</p>",
    "<h4>\n" +
    "\Task</h4> <p>Some trading occurs in blocks, where an entire 'chunk' of shares is obtained in one go. This question\\n\" +\n" +
    "\"    concentrates on allocations, where this block is being split in such a way to maximize the profit.</p> <p>You are\\n\" +\n" +
    "\"    working with the trading team in this scenario and they have asked you to design an algorithm, which takes in an\\n\" +\n" +
    "\"    array of allowed allocations for shares and a total value of shares that you need to obtain.</p> <p>Your algorithm\\n\" +\n" +
    "\"    should return the smallest possible number of allocations for this exchange to take place in order to avoid any\\n\" +\n" +
    "\"    overhead and maximize the speed of the transactions.</p> <h4>Constraints</h4> <p>You can assume that in a given set\\n\" +\n" +
    "\"    of potential allocations there is not necessarily at least one way of completing a full allocation.</p> <p>You can\\n\" +\n" +
    "\"    not make any assumptions about ordering of available allocations.</p> <h4>Examples</h4> <h5>Example 1</h5> <p><code>\\n\" +\n" +
    "\"    input: [1, 3, 4], 6 output: 2 </code></p> <p>Do it by picking 3 and 3 as your minimal split, despite the fact that\\n\" +\n" +
    "\"    there are other possible solutions that require more different allocations.</p> <h5>Example 2</h5> <p><code> input:\\n\" +\n" +
    "\"    [3, 4], 6 output: 2 </code></p> \""]
