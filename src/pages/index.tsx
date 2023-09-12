import {BaseLayout, DefaultExtendedRequest, DefaultExtendedResponse, registerPage, UseMiddlewareCallback, UseMiddlewareOptions} from 'class-forms';
import React from 'react';
import {Input} from 'rsuite';

class IndexPage extends BaseLayout {
    static path = '/';

    override useMiddleware(use: UseMiddlewareCallback<DefaultExtendedRequest, DefaultExtendedResponse>, options?: UseMiddlewareOptions) {
        super.useMiddleware(use, options);

        this.importStyle('rsuite/dist/rsuite.min.css', import.meta.url);
    }

    override render() {
        return super.render(() => ({
            title: 'Create BirthDay Bard',
            content: <>
                <Input as="textarea" rows={3} placeholder="Textarea" />
            </>
        }));
    }

}
registerPage(IndexPage);
