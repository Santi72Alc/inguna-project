import React from 'react';

import Card from './Card';

import ojo from 'assets/img/ojo.svg';
import logo from 'assets/img/logos/logo_sm.svg';

export default function Cards() {
    return (
        <section className="bg-gray-300 -mt-24">
            <div className="container px-2 mx-auto">

                {/* Cards article */}
                <article className="flex flex-wrap">

                    {/* Card 1 */}
                    <Card className="md:pt-12" title="Tarjeta 1" img={ojo}>
                        Keep you user engaged by providing meaningful
                        information. Remember that by this time, the user is
                        curious.
                            </Card>

                    {/* Card 2 */}
                    <Card title="New Card 2" img={logo}>
                        Keep you user engaged by providing meaningful
                        information. Remember that by this time, the user is
                        curious.
                            </Card>

                    {/* Card 3 */}
                    <Card className="md:pt-12" title="Verified Company">
                        Keep you user engaged by providing meaningful
                        information. Remember that by this time, the user is
                        curious.
                            </Card>

                </article>
            </div>
        </section>
    );
}
