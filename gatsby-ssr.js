import React from 'react';

export const onRenderBody = ({ setHeadComponents }, pluginOptions) => {
  setHeadComponents([
    <script
      src={pluginOptions.autoBlockSrc} />,
    <script src={pluginOptions.otSDKStubSrc}
      type="text/javascript" charset="UTF-8" data-domain-script={pluginOptions.dataDomainScript} />,
    <script type="text/javascript" dangerouslySetInnerHTML={{
      __html: `
        function OptanonWrapper() {}
      `
    }} />,
  ])
}