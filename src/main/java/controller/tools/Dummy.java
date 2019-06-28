/*****************************************************************
JADE - Java Agent DEvelopment Framework is a framework to develop 
multi-agent systems in compliance with the FIPA specifications.
Copyright (C) 2000 CSELT S.p.A. 

GNU Lesser General Public License

This library is free software; you can redistribute it and/or
modify it under the terms of the GNU Lesser General Public
License as published by the Free Software Foundation, 
version 2.1 of the License. 

This library is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public
License along with this library; if not, write to the
Free Software Foundation, Inc., 59 Temple Place - Suite 330,
Boston, MA  02111-1307, USA.
 *****************************************************************/

package controller.tools;

//Import required Jade classes
import jade.core.*;
import jade.core.behaviours.CyclicBehaviour;
import jade.lang.acl.ACLMessage;

/**
@author Giovanni Caire - CSELT S.p.A
@version $Date: 2009-04-08 11:41:41 +0200 (mer, 08 apr 2009) $ $Revision: 6110 $
 */

public class Dummy extends Agent 
{

	public static void main(String args[]) {
		Dummy d = new Dummy();
		d.setup();
    }
    
	// Extends the Agent setup method
	protected void setup(){

		addBehaviour(new CyclicBehaviour() {
        
            @Override
            public void action() {

                ACLMessage msg = receive();
                if (msg != null) {
                    System.out.println("\n\n\n\n" + msg.toString());
                    controller.TestAgent.dl.add(msg.toString());
                }
            }
        
        });
	}
}

