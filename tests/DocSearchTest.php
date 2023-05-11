<?php

use Parsedown;
use PHPUnit\Framework\TestCase;

final class DocSearchTest extends TestCase
{
    private array $languages = [
        'en',
        'fr_CA',
    ];

    public function testPushAndPop(): void
    {
        $this->assertEquals(
            1,
            1
        );
        $this->getMarkdownFiles();

    }

    private function getMarkdownFiles()
    {
        
        $text = file_get_contents('/home/david/Development/invoiceninja.github.io/source/en/clients.md');

        $parsedown = new Parsedown();
        
        $string_body = $parsedown->text($text);

        $dom = new \DOMDocument();

        $dom->loadHTML($string_body);

        $list = $dom->getElementsByTagName("h1");

        $page_title = $list->item(0)->nodeValue;
        $page_slug = trim(strtolower($page_title));

        $xpath = new DOMXPath($dom);

        $headings = $xpath->query('//h2 | //h3 | //h4 | //h5 | //h6');

        $contentByHeading = [];

        foreach ($headings as $heading) {
            $content = '';
            $node = $heading->nextSibling;

            while ($node !== null && !in_array($node->nodeName, ['h2', 'h3', 'h4', 'h5', 'h6'])) {
                if ($node->nodeType === XML_ELEMENT_NODE) {
                    $content .= $node->textContent;
                }
                $node = $node->nextSibling;
            }

            $contentByHeading[$heading->textContent] = $content;
        }

        // Output the result
        echo print_r($contentByHeading);

        $data = [];

        $x = 0;

        foreach($contentByHeading as $key => $value) {

            $index = new \stdClass;

            $slug = strtolower(str_replace(" ", "-", $key));
            // echo $key."\n";
            // echo "/en/{$page_slug}/#{$slug}\n";
            // echo $value."\n";
            // echo "-----\n";
            $index->id = $x;
            $index->uri = "/en/{$page_slug}/#{$slug}";
            $index->title = $page_title;
            $index->sub_title = $key;
            $index->body = $value;

            $data[] = $index;
            $x++;
        }

        echo "var documents = " . json_encode($data);
    }
}
