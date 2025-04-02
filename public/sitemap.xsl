<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9">
  <xsl:template match="/">
    <html>
      <head>
        <title>XML Sitemap - PranjalDev</title>
        <style type="text/css">
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            color: #333;
            background: #f5f5f5;
            margin: 0;
            padding: 20px;
          }
          .container {
            max-width: 1200px;
            margin: 0 auto;
            background: white;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          }
          h1 {
            color: #2c3e50;
            text-align: center;
            margin-bottom: 30px;
            font-size: 2em;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
            background: white;
          }
          th {
            background: #3498db;
            color: white;
            padding: 12px;
            text-align: left;
          }
          td {
            padding: 12px;
            border-bottom: 1px solid #eee;
          }
          tr:hover {
            background: #f8f9fa;
          }
          a {
            color: #3498db;
            text-decoration: none;
          }
          
          a:hover {
            text-decoration: underline;
          }
          .priority-high {
            color: #e74c3c;
            font-weight: bold;
          }
          .priority-medium {
            color: #f39c12;
          }
          .priority-low {
            color: #27ae60;
          }
          .header {
            text-align: center;
            margin-bottom: 30px;
          }
          .logo {
            font-size: 1.2em;
            color: #2c3e50;
            font-weight: bold;
            margin-bottom: 10px;
          }
          .stats {
            margin-top: 20px;
            text-align: center;
            color: #7f8c8d;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div class="logo">PranjalDev</div>
            <h1>XML Sitemap</h1>
          </div>
          <table>
            <tr>
              <th>URL</th>
              <th>Last Modified</th>
              <th>Change Frequency</th>
              <th>Priority</th>
            </tr>
            <xsl:for-each select="sitemap:urlset/sitemap:url">
              <tr>
                <td>
                  <a href="{sitemap:loc}"><xsl:value-of select="sitemap:loc"/></a>
                </td>
                <td><xsl:value-of select="sitemap:lastmod"/></td>
                <td><xsl:value-of select="sitemap:changefreq"/></td>
                <td>
                  <xsl:choose>
                    <xsl:when test="sitemap:priority = '1.0'">
                      <span class="priority-high"><xsl:value-of select="sitemap:priority"/></span>
                    </xsl:when>
                    <xsl:when test="sitemap:priority = '0.9'">
                      <span class="priority-medium"><xsl:value-of select="sitemap:priority"/></span>
                    </xsl:when>
                    <xsl:otherwise>
                      <span class="priority-low"><xsl:value-of select="sitemap:priority"/></span>
                    </xsl:otherwise>
                  </xsl:choose>
                </td>
              </tr>
            </xsl:for-each>
          </table>
          <div class="stats">
            <p>Total URLs: <xsl:value-of select="count(sitemap:urlset/sitemap:url)"/></p>
          </div>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet> 