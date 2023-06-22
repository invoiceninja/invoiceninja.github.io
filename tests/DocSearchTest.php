<?php

use PHPUnit\Framework\TestCase;

final class DocSearchTest extends TestCase
{
    private array $languages = [
        'en',
        'fr_CA',
    ];

    private array $documents = [];

    private int $counter = 0;

    public function testPushAndPop(): void
    {

        foreach($this->languages as $language)
        {
            $data = [];

            foreach (new \DirectoryIterator("./source/{$language}") as $fileInfo) 
            {
                if($fileInfo->isDot() || $fileInfo->getExtension() != 'md') {
                    continue;
                }
            
                $this->getMarkdownFiles($fileInfo->getPathname(), $language);
            
            }

            $index = "var documents = " . json_encode($this->documents);

            file_put_contents("./tests/{$language}.js", $index);
            file_put_contents("./tests/{$language}.json", json_encode($this->documents));

            $this->documents = [];
            $this->counter = 0;

        }

        // file_put_contents("./tests/documents.json", json_encode($parent));
        $this->assertNotNull($this->languages);
    }

    private function getMarkdownFiles($file_path, $language)
    {
        $text = file_get_contents($file_path);

        $file_name = strtolower(basename($file_path));
        $page_slug = str_replace(".md", "", $file_name);

        $parsedown = new \Parsedown();
        
        $string_body = $parsedown->text($text);

        $dom = new \DOMDocument();

        $dom->loadHTML(mb_convert_encoding($string_body, 'HTML-ENTITIES', 'UTF-8'));

        $list = $dom->getElementsByTagName("h1");

        $page_title = $list->item(0)->nodeValue;

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

        $data = [];

        $x = 0;

        foreach($contentByHeading as $key => $value) {

            if(str_contains($key, 'extends: _layouts'))
                continue;

            $index = new \stdClass;

            $slug = strtolower(str_replace(" ", "-", $key));

            $index->id = $this->counter;
            $index->uri = "/{$language}/{$page_slug}/#{$slug}";
            $index->title = $page_title;
            $index->sub_title = $key;
            $index->body = $value;

            $this->documents[] = $index;
            $this->counter ++;

        }

        return $data;

    }
}
